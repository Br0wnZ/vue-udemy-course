<template>
  <div class="about">
    <h1 :style="{ 'color': color }">Counter: {{ counter }}</h1>
    <button @click="decrease">- Decrease</button>
    <button @click="increase">+ Increase</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const increase = () => counter.value++
    const decrease = () => counter.value--
    const color = computed(() => counter.value < 0 ? 'red' : 'blue')
    return { counter, increase, decrease, color }
  }
}
</script>
