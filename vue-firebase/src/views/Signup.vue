<template>
  <div>
    <fieldset>
      <legend>SignUp</legend>
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
        <div class="mb-3">
          <input
            class="form-control"
            placeholder="Repeat password"
            type="password"
            name
            id="repeatPass"
            required
            v-model.trim="pass2"
          />
        </div>

        <button class="btn btn-dark" type="submit" :disabled="disabled">SignUp</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    email: '',
    pass1: '',
    pass2: '',
  }),
  computed: {
    disabled() {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true
      }
      if (this.pass1.length < 6) {
        return true
      }
      if (this.pass1 !== this.pass2) {
        return true
      }
    }
  },
  methods: {
    ...mapActions(['signup']),
    onSubmit() {
      this.signup({ email: this.email, password: this.pass1 })
      this.$refs.form.reset()
    }
  },
}
</script>
