import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import login from '../views/login'
import user from '../views/user'
import main from '../views/main'
import houses from '../views/houses'
import addHouse from '../views/addHouse'

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
        },
        {
          path: 'houses',
          name: 'houses',
          component: houses
        },
        {
          path: 'addHouse',
          name: 'addHouse',
          component: addHouse
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
