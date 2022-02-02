import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 100
  },
  mutations: {
    increase(state) {
      state.counter += 10
    }
  },
  actions: {
  },
  modules: {
  }
})
