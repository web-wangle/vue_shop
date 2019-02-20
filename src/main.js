import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入css初始化文件
import './assets/css/reset.css'

// // 引入vant-ui组件
import { Button } from 'vant'
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
