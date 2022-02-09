<template>
  <TheNavbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: 'App',
  components: { TheNavbar }
}


</script>
