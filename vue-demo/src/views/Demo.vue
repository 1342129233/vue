<template>
  <div id="demo">
    <!-- 图片 -->
    <div id="bag" v-bind:class="{burst:ended}">
      
    </div>

    <!-- 进度情况 -->
    <div id="bag-health">
      <div v-bind:style="{width: health + '%'}"></div>
    </div>

    <!-- 控制按钮 -->
    <div id="controls">
      <button v-on:click="punch" v-show="!ended">使劲敲</button>
      <button v-on:click="restart">重新开始</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default{
    name:"demo",
    data(){
      return{
        health: 100,
        ended: false
      }
    },
    methods:{
      
      punch:function(){
        let _this = this as any;
        _this.health -= 10;
        if(_this.health <= 0){
          _this.ended = true;
        }
      },
      restart:function(){
        let _this = this as any;
        _this.health = 100;
        _this.ended = false;
      }
    },
    computed:{

    }
  }
</script>

<style scoped>
#bag{
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url(../images/timg.jpg) center no-repeat;
  background-size: 80%；
}

#bag.burst{
  background-image: url(../images/timg.jpg);
}

#bag-health{
  width: 180px;
  border: 2px #000 solid;
  margin:0 auto 20px auto;
}

#bag-health div{
  height: 20px;
  background: crimson;
}

#controls{
  width: 200px;
  margin: 0 auto;
}

#controls button{
  margin-left: 20px;
}
</style>