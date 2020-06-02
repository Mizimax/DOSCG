import Axios from 'axios'
import urljoin from 'url-join'

const bcApiUrl = urljoin(process.env.VUE_APP_API_URL, '/api/compute/bc')

// initial state
const state = () => ({
  bcEquation: {
    a : 21,
    ab: 23,
    ac: -21,
  },
  bc        : { b: 0, c: 0 },
})

// getters
const getters = {
  getB: (state) => {
    return state.bc.b
  },
  getC: (state) => {
    return state.bc.c
  },
  getEquation: (state) => {
    return state.bcEquation
  }
}

// actions
const actions = {
  fetchBc({ commit }, equation) {
    return new Promise((resolve, reject) => {
      Axios.post(bcApiUrl, equation)
        .then(res => {
            commit('fetchBc', { res })
            resolve(res)
          },
        )
        .catch(err => {
          console.log(err.response.data)
          reject(err.response.data)
        })
    })
  },

  setInputEquation({ commit }, formInput) {
    commit('setInputEquation', formInput)
  },
}

// mutations
const mutations = {
  fetchBc(state, { res }) {
    state.bc = res.data.data
  },

  setInputEquation(state, formInput) {
    state.bcEquation = formInput
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}