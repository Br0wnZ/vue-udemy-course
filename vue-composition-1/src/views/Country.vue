<template>
  <div>
    <h1>{{ name }}</h1>
    <p v-for="(item, index) in response" :key="index">
      {{ item.name }} - {{ item.region }}
      <img :src="item.flag" alt="">
    </p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useFecth } from '../composables/useFecth';
export default {
  props: ['name'],
  setup(props) {
    console.log(props.name);
    const { name } = useRoute().params
    const apiUrl = `https://restcountries.com/v2/name/${name}`
    const { response } = useFecth(apiUrl)

    return { response }
  }
}
</script>

