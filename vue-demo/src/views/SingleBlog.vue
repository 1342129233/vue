<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <p>作者: {{blog.author}}</p>
    <p>分类: </p>
    <ul>
      <li v-for="categor in blog.categories" :key='categor.id' >
        {{categor}}
      </li>
    </ul>
    <button @click="deleteSingle()">删除</button>
    <router-link :to="'/edit/'+id">编辑</router-link>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default{
  name:"single-blog",
  data(){
    return{
      // id:(this as any).$router.params.id,
      id:(this as any).$route.params.id,
      blog:{}
    }
  },
  created(){
    //./../public/index.json/
    //https://jsonplaceholder.typicode.com/posts/
    let _this = this as any;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + _this.id)
    .then((data:any)=>{
      // console.log(data);
      _this.blog = data.body;
    })
  },
  methods:{
    deleteSingle(){
      let _this = this as any;
      axios.delete("https://jsonplaceholder.typicode.com/posts/"+ _this.id)
      .then((response:any)=>{
        _this.$router.push({path:'/'})
      })
    }
  }
}
</script>

<style>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>