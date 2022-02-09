<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">{{ userName }}</router-link>
      <div class="d-flex">
        <router-link to="/crud" class="btn btn-primary mx-1" v-if="isAuthenticated">CRUD</router-link>
        <router-link to="/profile" class="btn btn-primary mx-1" v-if="isAuthenticated">Profile</router-link>
        <button @click="signIn" class="btn btn-primary" v-if="!isAuthenticated">Login</button>
        <button @click="signOut" class="btn btn-danger mx-1" v-else>Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser"
import { useAuth } from '@vueuse/firebase'
import { computed } from "vue";

const { signIn, signOut } = useUser()
const { user, isAuthenticated } = useAuth()

const userName = computed(() => isAuthenticated.value ? user?.value?.displayName : 'Todo App')

</script>

<style lang="scss" scoped>
</style>