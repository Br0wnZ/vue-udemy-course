const app = Vue.createApp({
  data: () => ({
    title: 'My Bank',
    bankUrl: 'http://javimoreno.epizy.com/#/',
    amount: 100,
    status: true,
    transactions: [
      'Expenses',
      "Income",
      "Wire transfer"
    ],
    alertMessage: 'Your balance is 0',
    disabled: false
  }),
  methods: {
    addBalance() {
      this.amount += 50
      this.disabled = false
    },
    decreaseBalance() {
      this.amount <= 0 ? this.showAlert() : this.amount -= 50
    },
    showAlert() {
      this.disabled = true
      alert(this.alertMessage)
    } 
  },
})