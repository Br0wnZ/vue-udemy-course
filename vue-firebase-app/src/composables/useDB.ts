import { db, timestamp } from '../firebase'
import { Ref, ref } from 'vue'
import { IError, ITodo, ITodoResponse } from '@/models/todo'
import { useAuth } from '@vueuse/firebase'

export const useDB = () => {
  const todosRef = db.collection('todos')
  const loading: Ref<boolean> = ref(false)
  const { user } = useAuth()

  const getTodos = async (): Promise<ITodoResponse> => {
    try {
      loading.value = true
      const res = await todosRef.orderBy('date', 'desc').get()
      return {
        todos: res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as ITodo[],
        error: '',
        res: false
      }
    } catch (error: any) {
      return {
        todos: [],
        error,
        res: true
      }
    } finally {
      loading.value = false
    }
  }

  const addTodo = async (text: string): Promise<ITodo | any> => {
    try {
      loading.value = true
      const todo = {
        text: text,
        date: timestamp(),
        status: false,
        uid: user.value?.uid
      }
      const { id } = await todosRef.add(todo)
      return {
        id,
        ...todo
      } as ITodo
    } catch (error) {
      return <IError>{
        error,
        res: true
      }
    } finally {
      loading.value = false
    }
  }

  const editTodo = async (todo: ITodo): Promise<IError> => {
    try {
      loading.value = true
      await todosRef.doc(todo?.id).update({ status: !todo.status })
      return { error: '', res: false }
    } catch (error) {
      return <IError>{
        error,
        res: true
      }
    } finally {
      loading.value = false
    }
  }

  const deleteTodo = async (id: string): Promise<void | IError> => {
    try {
      loading.value = true
      const res = await todosRef.doc(id).delete()
    } catch (error) {
      return <IError>{
        error,
        res: true
      }
    } finally {
      loading.value = false
    }
  }

  return { getTodos, addTodo, editTodo, deleteTodo, loading }
}
