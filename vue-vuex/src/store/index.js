import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 100
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload
    },
    decrease(state, payload) {
      state.counter -= payload
    }
  },
  actions: {
    increaseAction({ commit }, amount) {
      commit('increase', amount)
    },
    decreaseAction({ commit }, amount) {
      commit('decrease', amount)
    },
    buttonAction({ commit }, data) {
      data.state 
        ? commit('increase', data.amount)
        : commit('decrease', data.amount)
    }
  },
  modules: {
  }
})
