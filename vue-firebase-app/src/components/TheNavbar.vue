<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Firestore</router-link>
      <div class="d-flex">
        <button @click="signIn" class="btn btn-primary">Login</button>
        <button @click="signOut" class="btn btn-danger">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser"

const { signIn, signOut } = useUser()

</script>

<style lang="scss" scoped>
</style>