<template>
  <div class="counter-copy">
    <h1 :style="{ 'color': color }">Counter Copy: {{ counter }}</h1>
    <Button buttonText="- Decrease" @action="decrease" />
    <Button buttonText="+ Increase" @action="increase" />
  </div>
</template>

<script>
import { useCounter } from '../composables/useCounter'
import Button from '@/components/Button.vue'

export default {
  components: { Button },
  setup(props) {
    return { ...useCounter() }
  }
}
</script>