<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="name">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  computed:{
    saleProducts(){
       return this.$store.getters.saleProducts;
    }
  },
  //当有多个getters的时候
  ...mapGetters([
    "saleProducts"
  ]),
  methods:{
    ...mapActions([
      "reducePrice"
    ]),
    reducePrice:function(amount){
      // this.$store.state.products.forEach(product =>{
      //   product.price -=1;
      // })
      
      this.$store.commit('reducePrice',amount)
    }
  }
}
</script>

<style>

</style>