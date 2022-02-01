const app = Vue.createApp({
  data: () => ({
    title: 'my Bank',
    bankUrl: 'http://javimoreno.epizy.com/#/',
    amount: 100,
    status: true,
    transactions: [
      'expenses',
      "income",
      "wire transfer"
    ],
    alertMessage: 'Your balance is 0',
    decreaseMessage: 'You can do it this transaction. Your balance cant no be under 0.',
    disabled: false,
  }),
  computed: {
    currentYear: () => new Date().getFullYear(),
    textColor() {
      return this.amount > 0 ? 'text-success' : 'text-danger'
    }
  },
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
    showAlert: (message) => alert(message),
    
    titleCase(text) {
      return text.toLowerCase().split(' ').map(word =>
        (word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
    }

  },
})