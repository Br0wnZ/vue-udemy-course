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
        commit('setCountries', await response.json())
      } catch (error) {
        console.log(error)
      }
    },
    filterByRegion({ commit, state }, region) {
      commit(
        'setFilteredCountries',
        state.countries.filter((country) => country.region.includes(region))
      )
    },
    filterByName({ commit, state }, name) {
      commit(
        'setFilteredCountries',
        state.countries.filter((country) => country.name.official.toLowerCase().includes(name.toLowerCase()))
      )
    }
  },
  getters: {
    orderedCountries: (state) =>
      state.filteredCountries.sort((a, b) => (a.population < b.population ? 1 : -1))
  },
  modules: {}
})
