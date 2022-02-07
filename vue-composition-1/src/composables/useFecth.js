import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export function useFecth(url) {
  const response = ref([])
  onMounted(async () => {
    try {
      const res = await fetch(url)
      response.value = await res.json()
    } catch (error) {
      console.log(error)
    }
  })
  return { response }
}
