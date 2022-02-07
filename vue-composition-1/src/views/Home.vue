<template>
  <div class="home">
    <h1 :style="{'color' : color}">Counter: {{ counter}}</h1>
    <button @click="decrease">- Decrease</button>
    <button @click="increase">+ Increase</button>
    <hr>
    <input type="text" v-model="text">
    <p>{{ text }}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    counter: 0,
    text: ''
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
