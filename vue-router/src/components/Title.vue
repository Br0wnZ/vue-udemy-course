<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'my-title',
    props: {
      title: String
    }
  }
</script>

<style scoped>

</style>