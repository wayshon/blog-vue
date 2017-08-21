import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Auth = () => import('@/containers/Auth')
const Home = () => import('@/containers/Home')
const Detail = () => import('@/containers/Detail')

const main = [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]

const router = new Router({
  routes: [...main]
})

// import tool from '@/assets/tools/tool.js';

// router.beforeEach((to, from, next) => {
//   let sessionId = sessionStorage.getItem('session_id');
//   if (to.name === 'Auth' || tool.isNotBlank(sessionId)) {
//     next();
//   } else {
//     next('/auth')
//   }
// })

export default router
