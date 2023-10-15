import Vue from 'vue'
import Router from 'vue-router'
import Quote from '@/components/Quote'
import Library from '@/components/Library'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quote',
      component: Quote,
    },
    {
      path: '/library',
      name: 'Library',
      component: Library,
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
