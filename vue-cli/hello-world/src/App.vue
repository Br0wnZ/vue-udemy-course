<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Title :text="title"/>
    <Account />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Account from '@/components/Account.vue'

export default {
  name: 'App',
  data: () => ({
    title: 'My Bank 2.0'
  }),
  components: {
    Account,
    Title
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
