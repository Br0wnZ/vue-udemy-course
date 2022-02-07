<template>
  <h1 :style="{ 'color': color }">Counter: {{ withSymbol }}</h1>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: ['counter', 'color'],
  setup(props) {
    const withSymbol = computed(() => `${props.counter}€`)
    return { withSymbol }
  }
}
</script>
