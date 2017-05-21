import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/learn/Hello'
import Index from '@/components/index/Index'
import Details from '@/components/details/Details'
import Mine from '@/components/mine/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/details',
      component: Details
    }
  ],
  linkActiveClass: 'active'
})
