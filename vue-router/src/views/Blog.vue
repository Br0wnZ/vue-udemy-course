<template>

  <Title :title="blogTitle" />
  
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'blog',
  components: {
    Title
  },
  data: () => ({
    blogTitle: 'Blog'
  })
}
</script>

<style>

</style>