<template>
  <div class="container">
    <h1 class="text-center">Countries Api</h1>
    <Regions />
    <CardList />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue"
import Regions from "@/components/Regions.vue"
export default {
    name: "App",
    components: { CardList, Regions }
}
</script>

<style>
</style>
