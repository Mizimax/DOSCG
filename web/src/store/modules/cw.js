import Axios from 'axios'
import urljoin from 'url-join'

const cwApiUrl = urljoin(process.env.VUE_APP_API_URL, '/api/map/bpt/cw')

// initial state
const state = () => ({
  paths: []
})

// getters
const getters = {
  getPaths: (state) => {
    return state.paths
  }
}

// actions
const actions = {
  fetchCw({ commit }, inputSeries) {
    return new Promise((resolve, reject) => {
      Axios.get(cwApiUrl, inputSeries)
        .then(res => {
            commit('setPaths', { res })
            resolve(res)
          },
        )
        .catch(err => {
          console.log(err.response.data)
          reject(err.response.data)
        })
    })
  }
}

// mutations
const mutations = {
  setPaths(state, { res }) {
    state.paths = res.data.data;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}