import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/learn/Hello'
import Index from '@/components/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'hello',
      component: Hello
    }
  ]
})
