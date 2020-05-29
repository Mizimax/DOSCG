import Vue from 'vue'
import Bc from 'web/src/pages/Bc'
import Notification from 'web/src/pages/Notification'
import CentralWorld from 'web/src/pages/CentralWorld'
import Series from './pages/Series'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const routes = [
  { path: '/series', component: Series, name: 'Series' },
  { path: '/bc', component: Bc, name: 'Bc' },
  { path: '/centralworld', component: CentralWorld, name: 'CentralWorld' },
  { path: '/notification', component: Notification, name: 'Notification' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
