<template>
  <div id="about">
    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label>博客内容</label>
      <textarea v-model="blog.body"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular8</label>
        <input type="checkbox" value="Angular8" v-model="blog.categories">
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key='author.id'>
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>

    <div v-if="submmited">
      <h3>您的博客发布成功!</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key='category.id' >{{category}}</li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>

  </div>
</template>

<script lang="ts">
import axios from 'axios'
// https://jsonplaceholder.typicode.com/posts
export default{
  name: 'about',
  data(){
    return{
      id:(this as any).$route.params.id,
      blog:{},
      authors:["Hemiah","Henry","Bucky"],
      submmited:false
    }
  },
  methods:{
    fetchData(){
      let _this = this as any;
      // console.log(_this.id);
      axios.get('https://jsonplaceholder.typicode.com/posts/' + _this.id)
      .then((response:any)=>{
        // console.log(response.body);
        _this.blog = response.body;
      })
    },
    post:function(){
      let _this = this as any;
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title:_this.blog.title,
        body:_this.blog.content,
        userId:1
      })
      .then((data:any)=>{
        console.log(data);
        _this.submmited = true;
      })
    }
  },
  created(){
    let _this = this as any;
    _this.fetchData();
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color:#fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>

