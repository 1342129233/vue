<template>
  <div id="app">
    <el-container style="border: 1px solid #eee">
      <!-- <el-header>
        头部
      </el-header> -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        
        <el-menu :default-openeds="[]">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>商品管理</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-1">
                <router-link to="/shopping">
                  商品列表
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-2">商品分类</el-menu-item>
              <el-menu-item index="1-3">商品发布者</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>申请记录管理</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="2-1">全部申请记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-folder-opened"></i>提现管理</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="3-1">提现记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-user-solid"></i><router-link to="/">用户管理</router-link></template>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-document-copy"></i>用户需求管理</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="5-1">全部需求记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-setting"></i>小程序</template>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="7-1">商城设置</el-menu-item>
              <el-menu-item index="7-2">环境监测</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="7-1"><router-link to="/about">管理员管理</router-link></el-menu-item>
              <el-menu-item index="7-2">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/> -->
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <!-- <el-footer>底部</el-footer> -->
    </el-container>
    
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50


a{
  text-decoration: none;
  color:#303133;
}
.router-link-active {
  text-decoration: none;
  color:#303133;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
  
.el-aside {
  color: #333;
}
</style>
