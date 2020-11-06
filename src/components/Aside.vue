<!--  -->
<template>
  <div class="aside">
      <h1>LOGO</h1>
       <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
           </template>
          <el-menu-item-group>
          <router-link to="/good" tag="p">商品详情</router-link>
        </el-menu-item-group>
       
        
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/add" tag="p">添加商品</router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
     
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
 
}

</script>

<style lang='scss' scoped>
.aside{
&>h1{
  text-align: center;
}
.el-menu-item-group{
  text-align: center;
}
.router-link{
  color: #ccc;
}
}
</style>
