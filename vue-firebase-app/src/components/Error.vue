<template>
  <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
  <strong>Error: </strong> {{ errorMessage }}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/useTodo' 
import { storeToRefs } from 'pinia';
const { errorMessage } = storeToRefs(useTodoStore())

</script>

<style scoped>

</style>