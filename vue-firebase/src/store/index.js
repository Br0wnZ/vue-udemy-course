import { createStore } from 'vuex'
import router from '../router'

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
    user: null,
    isEditing: false,
    error: {
      type: null,
      message: null
    }
  },
  getters: {
    isLogedIn(state) {
      return !!state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    async loadTasks(state) {
      if (!state.user) {
        return
      }
      const res = await fetch(
        `${process.env.VUE_APP_FIREBASE_URL}/tasks/${state.user.localId}.json?auth=${state.user.idToken}`
      )
      const data = await res.json()
      if (data && data.error) {
        return
      }
      for (const id in data) {
        state.tasks.push(data[id])
      }
    },
    async set(state, payload) {
      await fetch(
        `${process.env.VUE_APP_FIREBASE_URL}/tasks/${state.user.localId}/${payload.id}.json?auth=${state.user.idToken}`,
        {
          method: state.isEditing ? 'PATCH' : 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )
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
      state.isEditing = false
    },
    async delete(state, payload) {
      if (state.isEditing) {
        alert('The task is being edited. cannot be deleted')
        return
      }
      try {
        await fetch(
          `${process.env.VUE_APP_FIREBASE_URL}/tasks/${state.user.localId}/${payload}.json?auth=${state.user.idToken}`,
          {
            method: 'DELETE'
          }
        )
        state.tasks = state.tasks.filter((el) => el.id !== payload)
      } catch (error) {
        console.error(error)
      }
    },
    edit(state, payload) {
      state.isEditing = true
      state.task = { ...payload }
    },
    setError(state, payload) {
      if (['EMAIL_NOT_FOUND', 'INVALID_PASSWORD'].includes(payload)) {
        return (state.error = { type: 'login', message: 'Wrong credentials' })
      }
      if (payload === 'EMAIL_EXISTS') {
        return (state.error = { type: 'signup', message: 'Email already exists' })
      }
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
      if (localStorage.getItem('user')) {
        commit('setUser', JSON.parse(localStorage.getItem('user')))
      }
      commit('loadTasks')
    },
    async signup({ commit }, { email, password }) {
      try {
        const res = await fetch(
          `${process.env.VUE_APP_FIREBASE_AUTH_URL}?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
          {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true
            })
          }
        )
        const userDB = await res.json()
        if (userDB.error) {
          commit('setError', userDB.error.message)
          return console.error(userDB.error)
        }
        commit('setError', { type: null, message: null })
        commit('setUser', userDB)
      } catch (error) {
        console.log(error)
      }
    },
    async login({ commit }, { email, password }) {
      commit('setError', { type: null, message: null })
      try {
        const res = await fetch(
          `${process.env.VUE_APP_FIREBASE_LOGIN_URL}?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
          {
            method: 'POST',
            body: JSON.stringify({ email, password, returnSecureToken: true })
          }
        )
        const userDB = await res.json()
        if (userDB.error) {
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', { type: null, message: null })
        router.push('/')
        localStorage.setItem('user', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    logout({ commit }) {
      commit('setUser', null)
      localStorage.removeItem('user')
      router.push('/login')
    }
  },
  modules: {}
})
