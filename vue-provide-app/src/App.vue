<template>
  <div class="container">
    <h1 class="text-center">Counter app: {{ counter }}</h1>
    <CounterOne />
    <CounterAction />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import CounterOne from '@/components/CounterOne.vue'
import CounterAction from './components/CounterAction.vue'
export default {
  name: 'App',
  components: { CounterOne, CounterAction },
  setup(props) {
    const counter = ref(0)

    provide('counter', counter)

    return { counter }
  }
}
</script>

<style>
</style>
