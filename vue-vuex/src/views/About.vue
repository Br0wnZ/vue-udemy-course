<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <h1>Counter: {{ counter }}</h1>
    <hr>
    <input type="text" v-model="text">
    <h2>{{ text }}</h2>
    <hr>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'About',
  data: () => ({
    title: 'This is an about page',
    text: ''
  }),
  computed: {
    ...mapState(['counter'])
  }
}
</script>
