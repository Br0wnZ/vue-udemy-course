<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Title :title="homeTitle"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Title
  },
  data: () => ({
    homeTitle: 'Home Page'
  })
}
</script>
