<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Vue Forms</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
        <span class="navbar-text" v-if="isLogedIn">
          <router-link to="/" class="nav-link active">Task</router-link>
        </span>
        <span class="navbar-text" v-if="!isLogedIn">
          <router-link to="/login" class="nav-link active">Login</router-link>
        </span>
        <span class="navbar-text" v-if="!isLogedIn">
          <router-link to="/signup" class="nav-link active">Sign Up</router-link>
        </span>
        <span class="navbar-text" v-if="isLogedIn">
          <router-link @click="logout" to="" class="nav-link active">Sign Out</router-link>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TheNavbar',
  computed: {
    ...mapGetters(['isLogedIn']),
  },
  methods: {
    ...mapActions(['logout']),
    signOut() {}
  },
}
</script>

<style scoped>
</style>