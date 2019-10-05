import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import login from '../views/login'
import user from '../views/user'
import main from '../views/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/main',
      children: [
        {
          path: 'main',
          name: 'main',
          component: main
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  mode: 'history'
})
