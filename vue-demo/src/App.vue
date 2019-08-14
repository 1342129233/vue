<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | -->
      <router-link to="/about">About</router-link> | 
      <router-link to="/show-blogs">showblogs</router-link> | 
      <router-link to="/blog-header">write</router-link> 
      <blog-header></blog-header>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
import BlogHeader from './views/BlogHeader'
export default{
  name: 'app',
  components: {
    BlogHeader
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
