<template>
  <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
  <strong>Error: </strong> {{ error }}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const error = inject('error')
</script>

<style scoped>

</style>