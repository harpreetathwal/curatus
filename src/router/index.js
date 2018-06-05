import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import somethingelse from '@/components/somethingelse'
import Feed from '@/components/Feed'

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
    },
    {
      path: '/feed/:auth_token',
      name: 'feed',
      component: Feed
    }
  ]
})
