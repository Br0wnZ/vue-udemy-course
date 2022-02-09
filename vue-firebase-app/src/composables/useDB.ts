import { db } from '../firebase'
import { ref } from 'vue'

export const useDB = () => {
  const todosRef = db.collection('todos')
  const loading = ref(false)

  const getTodos = async () => {
    try {
      loading.value = true
      const res = await todosRef.get()
      return res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (error) {
      return {
        error,
        res: true
      }
    } finally {
      loading.value = false
    }
  }

  return { getTodos, loading }
}
