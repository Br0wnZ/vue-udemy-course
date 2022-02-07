<template>
  <div class="home">
    <h1>Counter: {{ counter}}</h1>
    <button @click="decrease">- Decrease</button>
    <button @click="increase">+ Increase</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    counter: 0
  }),
  methods: {
    increase() {
      return this.counter++
    },
    decrease() {
      return this.counter--
    },
  },
}
</script>
