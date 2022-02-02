<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 :style="counterColor">Counter: {{ counter }}</h1>
    <button @click="decreaseAction(15)">- Decrease</button>
    <button @click="increaseAction(15)">+ Increase</button>
    <hr />
    <Button :state="false" />
    <Button :state="true" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button
  },
  computed: {
    ...mapState(['counter']),
    counterColor() {
      return this.counter >= 100
        ? { 'color': 'green' }
        : { 'color': 'red' }
    }
  },
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['increaseAction', 'decreaseAction'])
  },
}
</script>
