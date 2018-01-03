import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login.vue'
import Home from '@/pages/home.vue'
import index from '@/pages/index.vue'
import test from '@/pages/test.vue'
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
       next('/home/index')
      }
    },
    {
      path:'/home',
      component: Home,
      children: [
        {
          path:'index',
          component: index
        },
        {
          path:'test',
          component: test
        }
        ]

    }  ]
})
