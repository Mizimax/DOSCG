import Vue from 'vue'
import Vuex from 'vuex'
import bc from './modules/bc'
import cw from './modules/cw'
import noti from './modules/noti'
import series from './modules/series'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    series,
    bc,
    cw,
    noti
  },
  strict: debug
})