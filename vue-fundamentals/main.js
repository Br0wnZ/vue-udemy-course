const app = Vue.createApp({
  data: () => ({
    title: 'My Bank',
    bankUrl: 'http://javimoreno.epizy.com/#/',
    amount: 0,
    status: true,
    transactions: [
      'Expenses',
      "Income",
      "Wire transfer"
    ]
  }),
  methods: {
    addBalance() {
      this.amount += 50
    }
  },
})