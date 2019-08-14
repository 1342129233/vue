<template>
  <div id="shopping">
    <el-table :data="tableDatas" stripe style="width: 100%">
      <el-table-column prop="goods_id" label="商品ID" width="140">

      </el-table-column>
      <el-table-column  label="商品图片" width="140">
        <template scope="scope">
          <img :src="'https://daren.bochuang.net/web/uploads/'+scope.row.file_name" width="60" height="60" class="head_pic"/>
          <!-- <img src="https://daren.bochuang.net/web/uploads/20190605174101c176b4256.jpg"> -->
        </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="280">
        
      </el-table-column>
      <el-table-column prop="category_name" label="商品分类" width="140">

      </el-table-column>
      <el-table-column prop="goods_sort" label="商品排序" width="140">

      </el-table-column>
      <el-table-column prop="spec_type" label="商品状态" width="140">
        
      </el-table-column>
      <el-table-column prop="update_time" label="添加时间" width="140">
        
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableDatas: []
    }
  },
  methods:{

  },
  computed:{
    
  },
  created(){
    //jsonp 请求  (访问跨域,记得写http://)
    
    this.$jsonp('http://www1.jiekou.com/demo02.php')
      .then((data) => {
        console.log(data)
        this.tableDatas = data;
      })
  }
}
</script>

<style>

</style>
