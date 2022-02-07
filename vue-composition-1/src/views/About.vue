<template>
  <div class="about">
    <Counter :counter="counter" :color="color" />
    <!-- <button @click="decrease">- Decrease</button> -->
    <!-- <button @click="increase">+ Increase</button> -->
    <Button buttonText="- Decrease" @action="decrease" />
    <Button buttonText="+ Increase" @action="increase" />
    <hr />
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import Button from '@/components/Button.vue'
import { computed, ref } from 'vue'
export default {
  components: { Counter, Button },
  setup() {
    const counter = ref(0)
    const text = ref('')
    const increase = () => counter.value++
    const decrease = () => counter.value--
    const color = computed(() => counter.value < 0 ? 'red' : 'blue')
    return { counter, text, increase, decrease, color }
  }
}
</script>
