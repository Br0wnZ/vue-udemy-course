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
    },
    isEditing: false
  },
  mutations: {
    set(state, payload) {
      if (state.isEditing) {
        const i = state.tasks.indexOf(state.tasks.filter(el => el.id === payload.id)[0])
        state.tasks[i] = payload
      } else {
        state.tasks.push(payload)
      }
      state.task = {
        id: '',
        name: '',
        description: '',
        categories: [],
        status: '',
        number: 0
      }
      state.isEditing = false
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(el => el.id !== payload)
    },
    edit(state, payload) {
      state.isEditing = true
      state.task = { ...payload }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('set', task)
    },
    deleteTask({ commit }, id) {
      commit('delete', id)
    },
    editTask({ commit }, task) {
      commit('edit', task)
    }

  },
  modules: {
  }
})
