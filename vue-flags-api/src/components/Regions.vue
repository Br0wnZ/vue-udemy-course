<template>
  <div class="text-center">
    <h3>Filter by regions</h3>
    <div class="btn-group mb-2" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-dark" @click="filter('Americas')">AM</button>
      <button type="button" class="btn btn-dark" @click="filter('Europe')">EU</button>
      <button type="button" class="btn btn-dark" @click="filter('Asia')">AS</button>
      <button type="button" class="btn btn-dark" @click="filter('Oceania')">OC</button>
      <button type="button" class="btn btn-dark" @click="filter('Africa')">AF</button>
      <button type="button" class="btn btn-dark" @click="filter('')">All</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup(props) {
    const store = useStore()

    const filter = (region) => store.dispatch('filterByRegion', region)

    return { filter }
  }
}
</script>

<style scoped>
</style>