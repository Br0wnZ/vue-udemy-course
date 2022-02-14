<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/crud" class="navbar-brand">
        <img
          class="d-inline-block align-text-top"
          src="../../public/img/icons/android-chrome-512x512.png"
          alt="navbar image"
          width="30"
          height="30"
        />
        <span class="ms-3" v-if="!isMobile">{{ userName }}</span>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/crud" class="nav-link mx-1" v-if="isAuthenticated">Todo</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link mx-1" v-if="isAuthenticated">Profile</router-link>
            </li>
            <li class="nav-item">
              <button
                @click="signIn"
                class="btn btn-outline-secondary"
                v-if="!isAuthenticated"
              >Login</button>
              <button @click="signOut" class="btn btn-outline-secondary mx-1" v-else>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUser } from "@/composables/useUser"
import { useAuth } from '@vueuse/firebase'
import { computed, inject } from "vue"

const { signIn, signOut } = useUser()
const { user, isAuthenticated } = useAuth()
const isMobile = inject<boolean>('isMobile')

const userName = computed(() => isAuthenticated.value ? user?.value?.displayName : 'Todo App')

</script>

<style lang="scss" scoped>
</style>