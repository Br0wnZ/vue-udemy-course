<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <h1>Counter: {{ counter }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'About',
  data: () => ({
    title: 'This is an about page'
  }),
  computed: {
    ...mapState(['counter'])
  }
}
</script>
