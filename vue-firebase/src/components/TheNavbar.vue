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
        <span class="navbar-text">
          <router-link to="/" class="nav-link active">Task</router-link>
        </span>
        <span class="navbar-text">
          <router-link to="/login" class="nav-link active">Login</router-link>
        </span>
        <span class="navbar-text">
          <router-link to="/signup" class="nav-link active">Signup</router-link>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>