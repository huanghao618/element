<template>
  <div id="app" class="app">
     <Home>ds</Home>
    
  </div>
</template>

<script>
// import Home from "./components/Index.vue"
export default {
  name: 'App',

    components: {
    Home: () => import("@/components/Index.vue"),
    
  },
 
}
</script>

<style lang='scss' scoped>
.app{
    margin: 0;
  padding: 0;
  height: 100%;
}
</style>
