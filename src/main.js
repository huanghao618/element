// 安装vue
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue
import App from './App.vue';

Vue.use(ElementUI);

// 关闭项目启动的生产提示
Vue.config.productionTip = false

import router from './router'
// 把所有api接口方法，都挂载在Vue的原型上，在组件中就可以使用 this.$http 来访问所有的接口方法
import http from '@/utils/api'
Vue.prototype.$http=http

new Vue({
  // 调用
  router,
  render: h => h(App),
}).$mount('#app')
