import { db, timestamp } from '../firebase'
import { Ref, ref } from 'vue'
import { IError, ITodo } from '@/models/todo'
import { useAuth } from '@vueuse/firebase'

export const useDB = () => {
  const todosRef = db.collection('todos')
  const loading: Ref<boolean> = ref(false)
  const { user } = useAuth() 

  const getTodos = async (): Promise<ITodo[] | IError> => {
    try {
      loading.value = true
      const res = await todosRef.orderBy('date', 'desc').get()
      return res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as ITodo[]
    } catch (error) {
      return <IError>{
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

  return { getTodos, addTodo, loading }
}
