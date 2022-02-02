<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 :style="counterColor">Counter: {{ counter }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapState(['counter']),
    counterColor() {
      return this.counter >= 100 
        ? { 'color': 'green' }
        : { 'color': 'red' }
    }
  }
}
</script>
