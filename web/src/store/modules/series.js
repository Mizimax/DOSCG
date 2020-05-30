import Axios from 'axios'

const seriesApiUrl = 'http://localhost:8000/api/compute/series'

// initial state
const state = () => ({
  inputSeries: [],
  series: []
})

// getters
const getters = {
  getSeries: (state) => {
    return state.series
  }
}

// actions
const actions = {
  async fetchSeries({ commit }) {
    await Axios.post(seriesApiUrl)
      .then(res => commit("fetchSeries", { res }))
      .catch(err => console.log(err));
  },

  setInputSeries({ commit }, formInput) {
    commit('setInputSeries', formInput)
  },
}

// mutations
const mutations = {
  fetchSeries(state, { res }) {
    state.series = res.data;
  },

  setInputSeries(state, { formInput }) {
    state.inputSeries = formInput
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}