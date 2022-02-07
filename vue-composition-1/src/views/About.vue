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
import { useCounter } from '../composables/useCounter'
import { ref } from 'vue'
export default {
  components: { Counter, Button },
  setup() {
    const text = ref('')
    return { ...useCounter(), text }
  }
}
</script>
