<template>
  <div>
    <h1>Profile</h1>
    <pre>{{ user }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@vueuse/firebase'

const { user } = useAuth()

</script>

<style lang="scss" scoped>

</style>