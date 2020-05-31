import Axios from 'axios'

const cwApiUrl = 'http://localhost:8000/api/map/bpt/cw'

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