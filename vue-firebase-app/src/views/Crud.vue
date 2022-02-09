<template>
  <div>
    <h1 v-if="!loading">Crud</h1>
    <Spinner v-if="loading"/>
    <div v-if="!!todos.length">
      <pre>{{ todos }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from '@/components/Spinner.vue'
import { useUser } from "@/composables/useUser"
import { useDB } from "@/composables/useDB";
import { onMounted, ref } from 'vue';
const { isAuthenticated } = useUser()
const { getTodos, loading } = useDB()
const todos = ref([])

onMounted(async() => {
  todos.value = await getTodos()
  if (todos.value.res) {
    console.log(todos.value.error)
  }
})


</script>
