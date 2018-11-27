<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content">
            <img src="@/assets/1.jpg" alt class="logo">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content">
            <h3 class="headline">DOAT2社区</h3>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content buttom-h">
            <el-button type="primary" @click.prevent="out()">退出登录</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :unique-opened="true"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用戶管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">用戶列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">角色列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-1">权限列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">商品列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-1">分類參數</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-1">商品分類</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>訂單管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">訂單列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>數據統計</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">數據報表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate () {
    const token = sessionStorage.getItem('token')
    console.log(token)
    if (!token) {
      console.log(1)
      this.$router.push('/login')
      this.$message.error('请登录')
    }
  },
  methods: {
    out () {
      sessionStorage.removeItem('token')
      this.$router.push('/login')
      this.$message.success('退出登录成功')
    },
  }
}
</script>
<style>
.container{
    height: 100%;
}
.container .header{
    background-color: #000000;
}
.aside{
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef1;
}
.headline{
    color: #fff;
    text-align: center;
}
.logo{
    height: 60px;
    width: 249px;
}
.buttom-h{
    padding-top:10px;
   text-align: center;
}
</style>
