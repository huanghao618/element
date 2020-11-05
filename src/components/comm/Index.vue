<!--  -->
<template>
  <div class="index">
    <el-container>

      <!-- 左边 -->
      <el-aside width="200px" height="100%">
        <Aside style="height:100%;"></Aside>
      </el-aside>
      <!-- 头部 -->
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <!-- 内容 -->
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
   
  </div>
</template>

<script>
// import Aside from "@/components/comm/Aside.vue"
export default {
  components: {
    Aside: () => import("@/components/comm/Aside.vue"),
    Main: () => import("@/components/comm/Main.vue"),
    Header: () => import("@/components/comm/Header.vue"),
    
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>

.index {
  // height: 100%;
  .el-container {
    // height: 100%;
    // background: #ccc;
    .el-aside {
      background: rgb(48, 65, 86);
      color: white;
      // height: 100%;
    }
  }
  .el-header {
    background: white;
    border-bottom: 1px solid #ccc;
  }
  .el-main {
    background: rgb(238, 240, 243);
    box-sizing: border-box;
    padding: 15px;
  }
}
</style>
