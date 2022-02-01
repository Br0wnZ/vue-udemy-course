<template>
  <div>
    <h2>Balance {{ amount }}€</h2>
    <h3>{{ accountStatus ? 'Active' : 'Inactive' }} Account</h3>

    <hr />

    <h2>Available services</h2>
    <ul>
      <li v-for="(item, index) in transactions" :key="index">{{ titleCase(item) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    amount: 1000,
    accountStatus: true,
    transactions: [
      'expenses',
      "income",
      "wire transfer"
    ],
  }),
  methods: {
    titleCase(text) {
      return text.toLowerCase().split(' ').map(word =>
        (word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
    }
  },
}
</script>

<style scoped>
</style>