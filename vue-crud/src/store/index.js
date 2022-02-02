import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: '',
      name: '',
      description: '',
      categories: [],
      status: '',
      number: 0
    }
  },
  mutations: {
    set(state, payload) {
      state.tasks.push(payload)
      state.task = {
        id: '',
        name: '',
        description: '',
        categories: [],
        status: '',
        number: 0
      }
    }
  },
  actions: {
    addTask({commit}, task) {
      commit('set', task)
    }
  },
  modules: {
  }
})
