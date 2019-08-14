import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
