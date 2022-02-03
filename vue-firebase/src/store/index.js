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
    async loadTasks(state) {
      try {
        const res = await fetch(`https://vue-api-b3e91-default-rtdb.firebaseio.com/tasks.json`)
        const data = await res.json()
        for (const id in data) {
          state.tasks.push(data[id])
        }
      } catch (error) {
        console.error(error)
      }
    },
    async set(state, payload) {
      try {
        await fetch(`https://vue-api-b3e91-default-rtdb.firebaseio.com/tasks/${payload.id}.json`, {
          method: state.isEditing ? 'PATCH' : 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        if (state.isEditing) {
          const i = state.tasks.indexOf(state.tasks.filter((el) => el.id === payload.id)[0])
          state.tasks[i] = payload
        } else {
          state.tasks.push(payload)
        }
      } catch (error) {
        console.error(error)
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
    async delete(state, payload) {
      if (state.isEditing) {
        alert('The task is being edited. cannot be deleted')
        return
      }
      try {
        await fetch(`https://vue-api-b3e91-default-rtdb.firebaseio.com/tasks/${payload}.json`, {
          method: 'DELETE'
        })
        state.tasks = state.tasks.filter((el) => el.id !== payload)
      } catch (error) {
        console.error(error)
      }
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
    },
    load({ commit }) {
      commit('loadTasks')
    }
  },
  modules: {}
})
