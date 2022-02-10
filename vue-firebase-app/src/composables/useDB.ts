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
      const res = await todosRef.get()
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
      const todo = {
        text: text,
        date: timestamp(),
        status: false,
        uid: user.value?.uid
      }
      const res = await todosRef.add(todo)
      return {
        id: res.id,
        ...todo
      } as ITodo
    } catch (error) {
      return <IError>{
        error,
        res: true
      }
    }
  }

  return { getTodos, addTodo, loading }
}
