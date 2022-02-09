<template>
  <div>
    <h1 v-if="!loading && !error">Crud</h1>
    <Spinner v-if="loading"/>
    <div v-if="!!todos.length">
      <pre>{{ todos }}</pre>
    </div>
    <div v-if="showError">
    <Error />
    </div>
  </div>
</template>

<script setup lang="ts">
import Spinner from '@/components/Spinner.vue'
import Error from '@/components/Error.vue'
import { useUser } from "@/composables/useUser"
import { useDB } from "@/composables/useDB";
import { computed, onMounted, provide, ref } from 'vue';
const { isAuthenticated } = useUser()
const { getTodos, loading } = useDB()
const todos = ref([])
const error = ref(null)
const showError = computed(() => !!error.value)
provide('error', error)

onMounted(async() => {
  todos.value = await getTodos()
  if (todos.value.res) {
    error.value = todos.value.error
    return
  }
})


</script>
