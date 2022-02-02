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
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(el => el.id !== payload)
    }
  },
  actions: {
    addTask({commit}, task) {
      commit('set', task)
    },
    deleteTask({commit}, id) {
      commit('delete', id)
    }
  },
  modules: {
  }
})
