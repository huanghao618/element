<template>
  <div id="app" class="app">
     <Home></Home>
     <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import Home from "./components/comm/Index.vue"
export default {
  name: 'App',

    components: {
    Home: () => import("@/components/comm/Index.vue"),
    
  },
 
}
</script>

<style lang='scss' scoped>
.app{
  width: 100%;
  height: 100%;
}
</style>
