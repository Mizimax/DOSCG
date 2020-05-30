import Axios from 'axios'

const bcApiUrl = 'http://localhost:8000/api/compute/bc'

// initial state
const state = () => ({
  bcEquation: {ab: 0, bc: 0},
  bc: { b: 0, c: 0 }
})

// getters
const getters = {
  getB: (state) => {
    return state.bc.b
  },
  getC: (state) => {
    return state.bc.c
  }
}

// actions
const actions = {
  async fetchBc({ commit }, a, ab, ac) {
    await Axios.post(bcApiUrl, { a, ab, ac })
      .then(res => commit("fetchBc", { res }))
      .catch(err => console.log(err));
  },

  setInputEquation({ commit }, formInput) {
    commit('setInputEquation', formInput)
  },
}

// mutations
const mutations = {
  fetchBc(state, { res }) {
    state.bc = res.data;
  },

  setInputEquation(state, { formInput }) {
    state.bcEquation = formInput
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}