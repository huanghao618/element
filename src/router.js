// 引入 固定写法
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由 固定写法
Vue.use(VueRouter)
//注册
const Register=()=>import("@/pages/Regitser.vue")
// 登录
const Login =()=>import("@/pages/Login.vue")
// 添加商品
const Good =()=>import("@/pages/Good.vue")
const Cart =()=>import("@/pages/Cart.vue")
// 富文本框
const Funwenben=()=>import("@/pages/Fuwenben.vue")

const router =new VueRouter({
routes:[
  {path:"/register",component:Register},
  {path:"/login/",component:Login},
  {path:"/good",component:Good},
  {path:"/cart",component:Cart},
  {path:"/fuwenben",component:Funwenben},
]

})
// // 安全拦截
// router.beforeEach((to, from, next) => { 
//   // 如果不是login就拦截
//  if(to.path!="/login"){
//   //  如果里面有token就不拦截
//   if(localStorage.getItem('token')){
//     next()
//   }else{
//     next("/login")
//   }
//  }else{
//    next()
//  }
  
// })
export default router
