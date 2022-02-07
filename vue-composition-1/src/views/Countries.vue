<template>
  <div>
    <h1>Countries</h1>
    <p v-for="(country, index) in response" :key="index">
      <router-link :to="`/countries/${country.name}`">{{ country.name }}</router-link>
    </p>
  </div>
</template>

<script>
import { useFecth } from '../composables/useFecth'
export default {
  setup(props) {
    const apiUrl = 'https://restcountries.com/v2/all'

    return { ...useFecth(apiUrl) }
  }
}
</script>