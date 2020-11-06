<template>
<div class="register">
  <div class="box">
    <div class="title">欢迎注册系统</div>

    <div>
      <el-input v-model="username" placeholder="用户名"></el-input>
    </div>
    <div>
      <el-input type="password" v-model="password" placeholder="密码"></el-input>
    </div>
    <div>
      <el-input type="password" v-model="password2" placeholder="确认密码"></el-input>
    </div>
    <div>
      <el-button type="primary" @click='click'>注册</el-button>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password2:""
    };
  },
  methods: {
    click:function(){
      let data={
        username:this.username,
        password:this.password,
        password2:this.password2
      }
      this.$http.regist(data).then(res=>{
        console.log("注册成功",res)
        this.$router.push("/login")
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.register{
  background: rgb(45, 58, 75);
  height: 100%;
  width: 100%;
  color: rgb(238, 238, 238);
  .box {
    width: 370px;
    margin: 0 auto;
    padding-top: 150px;
    &>div {
      line-height: 70px;
    }
    &>.title {
      font-size: 40px;
      text-align: center;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
