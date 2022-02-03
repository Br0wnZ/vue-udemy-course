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
        const i = state.tasks.indexOf(state.tasks.filter((el) => el.id === payload.id)[0])
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
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
      state.isEditing = false
    },
    delete(state, payload) {
      if (state.isEditing) {
        alert('The task is being edited. cannot be deleted')
        return
      }
      state.tasks = state.tasks.filter((el) => el.id !== payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    edit(state, payload) {
      state.isEditing = true
      state.task = { ...payload }
    },
    load(state, payload) {
      state.tasks = payload
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
    },
    loadLocalStorage({ commit }) {
      const localTasks = localStorage.getItem('tasks')
      if (localTasks) {
        commit('load', JSON.parse(localTasks))
        return
      }
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  },
  modules: {}
})
