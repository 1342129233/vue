import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    products:[
      {name:"第一名",price:200},
      {name:"第二名",price:140},
      {name:"第三名",price:20},
      {name:"第四名",price:10}
    ]
  },
  getters:{
    saleProducts: (state) =>{
      let saleProducts = state.products.map(product => {
          return {
            name:"**" + product.name + "*",
            price: product.price / 2
          }
        })
      return saleProducts;
    }
  },
  //改变事件
  mutations:{
    reducePrice:(state,payload)=>{
      state.products.forEach(product=>{
        product.price -= payload;
      })
    }
  },
  actions:{
    reducePrice:(context,payload) =>{
      setTimeout(function(){
        context.commit("reducePrice",payload);
      },2000)
    }
  }
})