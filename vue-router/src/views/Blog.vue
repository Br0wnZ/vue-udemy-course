<template>
  <div>
    <Title :title="blogTitle" />

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.id }} {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'blog',
  components: {
    Title
  },
  data: () => ({
    blogTitle: 'Blog',
    items: []
  }),
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        this.items = await data.json()
        console.log(this.items[0]);
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style>
</style>