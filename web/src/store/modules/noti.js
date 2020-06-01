import Axios from 'axios'

const notiApiUrl = 'http://localhost:8000/api/line/noanswer'

// initial state
const state = () => ({
  notis: []
})

// getters
const getters = {
  getNotis: (state) => {
    return state.notis
  }
}

// actions
const actions = {
  fetchNotis({ commit }, inputSeries) {
    return new Promise((resolve, reject) => {
      Axios.get(notiApiUrl, inputSeries)
        .then(res => {
            commit('setNotis', { res })
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
  setNotis(state, { res }) {
    state.notis = res.data.data;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}