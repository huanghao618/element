<!--  -->
<template>
  <div class="index">
 <el-container>
  <el-aside width="200px"><Aside></Aside></el-aside>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main><Main></Main></el-main>
  </el-container>
</el-container>
   
  </div>
</template>

<script>
// import Aside from "@/components/comm/Aside.vue"
export default {
  components: {
    Aside: () => import("@/components/Aside.vue"),
    Main: () => import("@/components/Main.vue"),
    Header: () => import("@/components/Header.vue"),
    
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.index{
 height: 100%;
  background: #545C64;
  .el-container{

 
  .el-aside{
}
.el-header{
   height: 40px;
   line-height: 40px;
   background: #51B7EC;
}
.el-main{
 height: 850px;
 background: #ccc;
 .data-v-54d3a52e {
   height: 850px;
   .el-table{
     height: 100%;
     .el-table__empty-block{
        height: 680px;
     }
   }
 }
}
}
}




</style>
