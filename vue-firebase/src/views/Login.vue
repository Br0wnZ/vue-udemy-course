<template>
  <div>
    <fieldset>
      <legend>Login</legend>
      <form ref="form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <input
            class="form-control"
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
import { mapActions } from 'vuex'
export default {
  data: () => ({
    email: '',
    pass1: ''
  }),
  computed: {
    disabled() {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true
      }
      if (this.pass1.length < 6) {
        return true
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login({ email: this.email, password: this.pass1 })
      this.$refs.form.reset()
    }
  },
}
</script>
