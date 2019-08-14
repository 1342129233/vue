import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

//自定义指令(不带值v-raindow)(颜色变化)
Vue.directive('raindow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})

//(带值)(字符串需要单引号)()
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }

    //narrow
    if(binding.arg == 'narrow'){
      el.style.background = "#6677cc";
      el.style.padding = "20px";
    }
  }
})

//自定义过滤器
// Vue.filter("to-uppercase",function(value:any){
//   //大写
//   return value.toUpperCase();
// })

Vue.filter("snippet",function(value:any){
  return value.slice(0,100)+"...";
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)){
    console.log(1)
  }else{
    console.log(2)
  }
  
})