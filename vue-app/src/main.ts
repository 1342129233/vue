import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueResource from 'vue-resource'
import VueJsonp from 'vue-jsonp'
import Axios from 'axios'


import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueJsonp);
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
