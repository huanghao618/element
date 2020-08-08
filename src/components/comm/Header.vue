<!--  -->
<template>
  <div class="header">
      <el-header>
           
           <div>
           <router-link to="/login" tag="span">登陆</router-link>
            <router-link to="/register" tag="span">注册</router-link>
           </div>
    </el-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{}
}

</script>

<style lang='scss' scoped>
.header{
  .el-header{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    .el-button{
      font-size: 16px;
    }
    .router-link{
      margin-left: 10px;
    }
  }
}
</style>
