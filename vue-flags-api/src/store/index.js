import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filteredCountries: []
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    },
    setFilteredCountries(state, payload) {
      state.filteredCountries = payload
    }
  },
  actions: {
    async getCountries({ commit }) {
      try {
        const response = await fetch('https://restcountries.com/v3/all')
        const countries = await response.json()
        console.log('🚀 ~ file: index.js ~ line 21 ~ getCountries ~ countries', countries)
        commit('setCountries', countries)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    orderedCountries: (state) =>
      state.countries.sort((a, b) => (a.population < b.population ? 1 : -1))
  },
  modules: {}
})
