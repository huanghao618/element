<!--  -->
<template>
  <div class="header">
      <el-header>
           
           <div>
              <el-button type="primary">
                 <router-link to="/login" tag="span">登陆</router-link>
              </el-button>
            <el-button type="primary">
            <router-link to="/register" tag="span">注册</router-link>
               </el-button>
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
    height: 40px;
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
