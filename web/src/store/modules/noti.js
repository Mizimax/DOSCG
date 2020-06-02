import Axios from 'axios'
import urljoin from 'url-join'

const notiApiUrl = urljoin(process.env.VUE_APP_API_URL, '/api/line/noanswer')

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