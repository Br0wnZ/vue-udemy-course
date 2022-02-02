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
      console.log("🚀 ~ file: index.js ~ line 17 ~ set ~ payload", payload)
      state.tasks.push(payload)
      state.task = {
        id: '',
        name: '',
        description: '',
        categories: [],
        status: '',
        number: 0
      }
      console.log(state.tasks);
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
