<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      text: String
    }
  }
</script>

<style scoped>
  h1 {
    color: peru
  }
</style>