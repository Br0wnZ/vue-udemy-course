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
    decreaseMessage: 'You can do it this transaction. Your balance cant no be under 0.',
    disabled: false
  }),
  methods: {
    addBalance(amount) {
      this.amount += amount
      this.disabled = false
    },
    decreaseBalance(amount) {
      this.amount <= 0 
        ? (this.disabled = true, this.showAlert(this.alertMessage))
        : this.amount -= amount 
    },
    showAlert: (message) => alert(message)
    
  },
})