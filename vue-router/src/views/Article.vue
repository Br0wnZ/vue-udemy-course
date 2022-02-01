<template>
  <div>
    <Title :title="articletTitle" />
    <h2>Param: {{ param }}</h2>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'Article',
  components: {
    Title
  },
  data: () => ({
    articletTitle: 'Route with params'
  }),
  computed: {
    param() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
</style>