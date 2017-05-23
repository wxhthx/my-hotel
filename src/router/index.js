import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/learn/Hello'
import Login from '@/components/login/Login'
import Hotel from '@/components/hotel/Hotel'
import Index from '@/components/index/Index'
import Details from '@/components/details/Details'
import Mine from '@/components/mine/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/hotel',
      component: Hotel,
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          path: 'details',
          component: Details
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
