<template>
  <button @click="buttonAction({ state, amount: 50 })">
    {{ buttonText }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Button',
  props: {
    state: Boolean
  },
  computed: {
    buttonText() {
      return this.state ? '+ Increase' : '- Decrease'
    }
  },
  methods: {
    ...mapActions(['buttonAction'])
  },
}
</script>