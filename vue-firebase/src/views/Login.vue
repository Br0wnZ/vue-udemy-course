<template>
  <div>
    <div class="alert alert-danger" v-if="error.type === 'login'">
      {{ error.message }}
    </div>
    <fieldset>
      <legend>Login</legend>
      <form ref="form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <input
            class="form-control"
            :class="[inputError]"
            placeholder="Your email"
            type="email"
            name
            id="email"
            required
            v-model.trim="email"
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            :class="[inputError]"
            placeholder="Password"
            type="password"
            name
            id="password"
            required
            v-model.trim="pass1"
          />
        </div>

        <button class="btn btn-dark" type="submit" :disabled="disabled">Login</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    email: '',
    pass1: ''
  }),
  computed: {
    ...mapState(['error']),
    disabled() {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true
      }
      if (this.pass1.length < 6) {
        return true
      }
    },
    inputError() {
      return this.error.type === 'login' ? 'is-invalid' : ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit() {
      await this.login({ email: this.email, password: this.pass1 })
      if (this.error.type === 'login') {
        return
      }
      this.$refs.form.reset()
    }
  },
}
</script>
