import Axios from 'axios'
import urljoin from 'url-join'

const seriesApiUrl = urljoin(process.env.VUE_APP_API_URL, '/api/compute/series')

// initial state
const state = () => ({
  inputSeries: [5,9,15,23],
  series: []
})

// getters
const getters = {
  getSeries: (state) => {
    return state.series
  },
  getInputSeries: (state) => {
    return state.inputSeries
  }
}

// actions
const actions = {
  fetchSeries({ commit }, inputSeries) {
    return new Promise((resolve, reject) => {
      Axios.post(seriesApiUrl, inputSeries)
        .then(res => {
            commit('fetchSeries', { res })
            resolve(res)
          },
        )
        .catch(err => {
          console.log(err.response.data)
          reject(err.response.data)
        })
    })
  },

  setInputSeries({ commit }, formInput) {
    commit('setInputSeries', formInput)
  },
}

// mutations
const mutations = {
  fetchSeries(state, { res }) {
    state.series = res.data.data;
  },

  setInputSeries(state, formInput) {
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