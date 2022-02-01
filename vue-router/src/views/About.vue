<template>
  <Title :title="aboutTitle" />
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'about',
  components: {
    Title
  },
  data: () => ({
    aboutTitle: 'About Page'
  })
}
</script>
