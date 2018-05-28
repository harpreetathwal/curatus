import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import somethingelse from '@/components/somethingelse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/somethingelse/:auth_token',
      name: 'somethingelse',
      component: somethingelse
    }
  ]
})
