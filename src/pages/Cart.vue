<!--  -->
<template>
  <div>
      <h1>添加商品</h1>
      <el-input v-model="img" placeholder="请输入商品图片"></el-input>
      <el-input v-model="name" placeholder="请输入商品名称"></el-input>
      <el-input v-model="desc" placeholder="请输入商品简介"></el-input>
      <el-input v-model="price" placeholder="请输入商品价格"></el-input>
      <el-input v-model="cate" placeholder="请输入商品类型"></el-input>
       <el-input v-model="hot" placeholder="是否热销"></el-input>
       <el-button  @click="add">添加</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img:"",//图片
      name:"",//商品名称
      desc:"",//商品简介
      price:100,//商品价格
      cate:"",//商品类型
      hot:"",//是否热销

    }
  },
  mounted(){

  },
  methods:{
    add(){
      let data={
      img:this.img,
      name:this.name,
      desc:this.desc,
      price:this.price,
      cate:this.cate,
      hot:this.hot
    }
    this.$http.addGood(data).then((res)=>{
     console.log("添加成功",res)
     this.$router.push("/good")
    })
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
