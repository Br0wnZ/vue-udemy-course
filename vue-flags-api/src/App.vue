<template>
  <div class="container">
    <h1 class="text-center">Countries Api</h1>
    <Regions />
    <Search />
    <CardList />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue"
import Regions from "@/components/Regions.vue"
import Search from "@/components/Search.vue"
export default {
    name: "App",
    components: { CardList, Regions, Search }
}
</script>

<style>
</style>
