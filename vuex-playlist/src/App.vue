<template>
  <div id="app">
    <productlistone></productlistone>
    <productlisttwo></productlisttwo>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'
export default {
  name: 'app',
  components:{
    'productlistone': ProductListOne,
    'productlisttwo': ProductListTwo
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
