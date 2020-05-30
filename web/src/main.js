import Vue from 'vue'
import Bc from './pages/Bc'
import Notification from './pages/Notification'
import CentralWorld from './pages/CentralWorld'
import Series from './pages/Series'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueAxios from "vue-axios";
import axios from "axios";
import store from './store'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [
  { path: '/series', component: Series, name: 'Series' },
  { path: '/bc', component: Bc, name: 'Bc' },
  { path: '/centralworld', component: CentralWorld, name: 'CentralWorld' },
  { path: '/notification', component: Notification, name: 'Notification' },
  { path: '/', redirect: '/series' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
