import { db, timestamp } from '../firebase'
import { Ref, ref } from 'vue'
import { ITodo } from '@/models/todo'
import { useAuth } from '@vueuse/firebase'
import { useTodoStore } from '@/stores/useTodo' 
import { COLLECTIONS } from '@/utils/consts'

export const useDB = () => {
  const todosRef = db.collection(COLLECTIONS.todos)
  const loading: Ref<boolean> = ref(false)
  const { user } = useAuth()
  const store = useTodoStore()
  const getTodos = async (): Promise<void> => {
    try {
      store.setError(false)
      loading.value = true
      const res = await todosRef.where('uid', '==', user.value?.uid).orderBy('date', 'desc').get()
      const todos = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as ITodo[]
      store.setTodos(todos)
    } catch (error: any) {
      store.setError(true, error)
    } finally {
      loading.value = false
    }
  }

  const addTodo = async (text: string): Promise<void> => {
    try {
      store.setError(false)
      loading.value = true
      const todo = {
        text: text,
        date: timestamp(),
        status: false,
        uid: user.value?.uid
      }
      const { id } = await todosRef.add(todo)
      store.addTodo({ id, ...todo})
    } catch (error: any) {
      store.setError(true, error)
    } finally {
      loading.value = false
    }
  }

  const editTodo = async (todo: ITodo): Promise<void> => {
    try {
      store.setError(false)
      loading.value = true
      await todosRef.doc(todo.id).update({ status: !todo.status })
      store.editTodo(todo)
    } catch (error: any) {
      store.setError(true, error)
    } finally {
      loading.value = false
    }
  }

  const deleteTodo = async (id: string): Promise<void> => {
    try {
      store.setError(false)
      loading.value = true
      await todosRef.doc(id).delete()
      store.deleteTodo(id)
    } catch (error: any) {
      store.setError(true, error)
    } finally {
      loading.value = false
    }
  }

  return { getTodos, addTodo, editTodo, deleteTodo, loading }
}
