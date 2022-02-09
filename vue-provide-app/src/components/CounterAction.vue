<template>
  <div>
    <button @click="decrease" class="btn btn-info m-2">- Decrease</button>
    <button @click="increase" class="btn btn-info m-2">+ Increase</button>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup(props) {
    const counter = inject('counter')
    const increase = () => counter.value++
    const decrease = () => counter.value--
    return { increase, decrease }
  }
}
</script>
