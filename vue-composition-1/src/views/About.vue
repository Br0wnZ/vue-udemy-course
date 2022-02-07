<template>
  <div class="about">
    <h1>Counter: {{ counter }}</h1>
    <button @click="decrease">- Decrease</button>
    <button @click="increase">+ Increase</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const increase = () => counter.value++
    const decrease = () => counter.value--
    return { counter, increase, decrease }
  }
}
</script>
