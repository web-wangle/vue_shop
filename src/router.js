import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sign from './views/Sign.vue'
import LookingForGuide from './views/LookingForGuide.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Sign',
      component: Sign
    },
    {
      path: '/LookingForGuide',
      component: LookingForGuide
    }
  ]
})
