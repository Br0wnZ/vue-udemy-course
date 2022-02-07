<template>
  <div>
    <h1>Countries</h1>
    <p v-for="(countrie, index) in countries" :key="index">
      {{ countrie.name }}
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
  export default {
    setup(props) {
      const countries = ref([])
      // onMounted(async () => {
      //   try {
      //     const res = await fetch('https://restcountries.com/v2/all')
      //     countries.value = await res.json()
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }) 
      const fecthData = async() => {
        try {
          const res = await fetch('api.json')
          countries.value = await res.json()
        } catch (error) {
          console.log(error);
        }
      }
      fecthData()

      return { countries }
    }
  }
</script>