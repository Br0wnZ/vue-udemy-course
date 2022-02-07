<template>
  <div class="home">
    <h1 :style="{'color' : color}">Counter: {{ counter}}</h1>
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
  computed: {
    color() {
      return this.counter < 0 ? 'red' : 'blue'
    }
  },
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
