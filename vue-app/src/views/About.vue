<template>
  <div class="about">
    <h3 class="header">{{qwe}}</h3>

    <el-row>
      <el-button icon="el-icon-circle-plus" type="success" size="mini">添加</el-button>
    </el-row>

    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="store_user_id" label="管理员ID" width="180">
        </el-table-column>
        
        <el-table-column prop="user_name" label="管理员名称" width="180">
        </el-table-column>

        <el-table-column prop="update_time" label="添加时间">
        </el-table-column>

        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </template>

    <div class="record">总记录:  {{tableDataLength}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
 // @ is an alias to /src

// @Component({
//   components: {
    
//   },
// })

export default{
  data(){
    return{
      qwe:"管理员列表",
      tableData:[],
      tableDataLength:""
    }
  },
  methods:{
    handleEdit(index:any,row:any){
      console.log(index,row);
    }
  },
  created(){
    (this as any).$jsonp('http://www1.jiekou.com/demo03.php')
      .then((data:any) => {
        console.log(data);
        (this as any).tableData = data;
        (this as any).tableDataLength = data.length;
    })
    //http 请求 (vue-resource)
    // (this as any).$http.get("http://jsonplaceholder.typicode.com/users")
    //   .then((data:any)=>{
    //     console.log(data)
    //   })

    //jsonp 请求  (访问跨域,记得写http://)
    // (this as any).$jsonp('http://www1.jiekou.com')
    //   .then((data:any) => {
    //     console.log(data)
    //   })
    
    //axios 请求数据
    
    // (this as any).$axios.get("http://jsonplaceholder.typicode.com/users")
    //   .then((response:any) => {
    //   console.log(response.data)
    // })
  }
}
</script>

<style scoped>
.header{
  padding: 12px 20px;
  border-bottom: 1px solid #eef1f5;
}
.record{
  margin-top: 10px;
  float: right;
  margin-right:20px;
}
</style>