import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
