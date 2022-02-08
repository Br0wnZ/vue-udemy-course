<template>
  <input class="form-control my-3" @keyup="handleSearch" type="text" placeholder="Search country" v-model="text" />
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  setup(props) {
    const store = useStore()
    const text = ref('')
    const handleSearch = () => store.dispatch('filterByName', text.value);
    return { text, handleSearch }
  }
}
</script>

<style scoped>
</style>