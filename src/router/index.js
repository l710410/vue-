import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import '@/assets/style.css'
import Home from '@/components/home/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
