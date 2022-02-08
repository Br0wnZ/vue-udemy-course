<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup(props) {
    const counter = inject('counter')

    return { counter }
  }
}
</script>
