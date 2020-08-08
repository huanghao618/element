// 引入 固定写法
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由 固定写法
Vue.use(VueRouter)

const Register=()=>import("@/components/comm/Regitser.vue")
const Login =()=>import("@/components/comm/Login.vue")
const Good =()=>import("@/pages/Good.vue")
const Cart =()=>import("@/pages/Cart.vue")
const Funwenben=()=>import("@/components/comm/Fuwenben.vue")

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
