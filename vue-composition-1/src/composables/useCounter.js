
import { ref, computed} from 'vue'

export function useCounter() {
  const counter = ref(0)
  const increase = () => counter.value++
  const decrease = () => counter.value--
  const color = computed(() => counter.value < 0 ? 'red' : 'blue')

  return { counter, increase, decrease, color }
}
