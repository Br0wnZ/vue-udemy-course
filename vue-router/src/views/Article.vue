<template>
  <div>
    <Title :title="articletTitle" />
    <h2>Id: {{ param }}</h2>
    <div>{{ articleDetail.body }}</div>
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
    articletTitle: 'Route with params',
    articleDetail: {}
  }),
  computed: {
    param() {
      return this.$route.params.id
    }
  },
  created() {
    this.getItemDetail()
  },
  methods: {
    async getItemDetail() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.param}`)
        this.articleDetail = await data.json()
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>
</style>