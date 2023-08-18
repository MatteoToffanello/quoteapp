import Vue from 'vue'
import Router from 'vue-router'
import Quote from '@/components/Quote'
import Pagina from '@/components/Pagina2'
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
      path: '/pagina2',
      name: 'Pagina2',
      component: Pagina,
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
