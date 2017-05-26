// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueTouch from 'vue-touch'
import store from './store/index'
import plugin from './validate/install'
Vue.use(VueTouch, {name: 'v-touch'}).use(Vuex).use(plugin, {name: 'v-validate'})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
