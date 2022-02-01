<template>
  <div>
    <h2>Balance {{ amount }}€</h2>
    <h3>{{ accountStatus ? texts.active : texts.inactive }}</h3>

    <hr />

    <h2>Available services</h2>
    <ul>
      <li v-for="(item, index) in transactions" :key="index">{{ titleCase(item) }}</li>
    </ul>

    <Actions :buttonText="texts.increaseText"/>
    <Actions :buttonText="texts.decreaseText"/>
  </div>
</template>

<script>
import Actions from '@/components/Actions.vue'
export default {
  data: () => ({
    amount: 1000,
    accountStatus: true,
    transactions: [
      'expenses',
      "income",
      "wire transfer"
    ],
    texts: {
      active: 'Active Account',
      inactive: 'Inactive Account',
      increaseText: '+ Increase',
      decreaseText: '- Decrease',
    }
  }),
  components: {
    Actions
   },
  methods: {
    titleCase(text) {
      return text.toLowerCase().split(' ').map(word =>
        (word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
    },
    increase() {
      this.amount += 100
    },
    decrease() {
      this.amount -= 100
    },
  },
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>