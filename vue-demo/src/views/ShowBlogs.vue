<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" :key='blog.id' class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-raindow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default{
  name:"show-blogs",
  data(){
    return{
      blogs: [],
      search:""
    }
  },
  created(){
    let _this = this as any;
    _this.$http.get("http://localhost:8080/index.json")
    .then((response:any) => {
      _this.blogs = response.body.slice(0,10);
      console.log(_this.blogs);
    })
  },
  computed:{
    //搜索功能
    filteredBlogs:function(){
      return (this as any).blogs.filter((blog:any)=>{
        return blog.title.match((this as any).search);
      })
    }
  },
  //局部自定义过滤器
  filters:{
    "to-uppercase":function(value:any){
      return value.toUpperCase();
    }
  },
  //局部自定义指令(不带值v-raindow)(颜色变化)
  directives:{
    'raindow':{
      bind(el:any,binding:any,vnode:any){
        el.style.color = "#"+Math.random().toString(16).slice(2,8)
      }
    }
  }
}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a{
  color: #444;
  text-decoration: none;
}
inpit[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>