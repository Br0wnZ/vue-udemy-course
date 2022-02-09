<template>
  <TheNavbar />
  <Spinner v-if="loading"/>
  <div v-else class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheNavbar from "@/components/TheNavbar.vue";
import Spinner from '@/components/Spinner.vue'
import { getCurrentUser } from "./firebase";

const loading = ref(false)
onMounted(async() => {
  loading.value = true
  await getCurrentUser()
  loading.value = false
})



</script>
