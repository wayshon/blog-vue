import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import tool from '@/assets/tools/tool'

Vue.use(Router)

// 1级路由
const NotFound = resolve => require.ensure([], () => {resolve(require('@/containers/NotFound'))}, 'NotFound')
const Auth = resolve => require.ensure([], () => {resolve(require('@/containers/Auth'))}, 'Auth')
const Home = resolve => require.ensure([], () => {resolve(require('@/containers/Home'))}, 'Home')
const User = resolve => require.ensure([], () => {resolve(require('@/containers/User'))}, 'User')
const Article = resolve => require.ensure([], () => {resolve(require('@/containers/Article'))}, 'Article')

// 2级路由
const ArticleList = resolve => require.ensure([], () => {resolve(require('@/containers/Article/Children/List'))}, 'Article')
const ArticleAdd = resolve => require.ensure([], () => {resolve(require('@/containers/Article/Children/Add'))}, 'Article')
const ArticleDetail = resolve => require.ensure([], () => {resolve(require('@/containers/Article/Children/Detail'))}, 'Article')
const UserDetail = resolve => require.ensure([], () => {resolve(require('@/containers/User/Detail'))}, 'User')

// 3级路由
const UserArticle = resolve => require.ensure([], () => {resolve(require('@/containers/User/Detail/Children/Article'))}, 'User')
const UserComment = resolve => require.ensure([], () => {resolve(require('@/containers/User/Detail/Children/Comment'))}, 'User')
const UserCollection = resolve => require.ensure([], () => {resolve(require('@/containers/User/Detail/Children/Collection'))}, 'User')
const UserStar = resolve => require.ensure([], () => {resolve(require('@/containers/User/Detail/Children/Star'))}, 'User')

const main = [
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/auth/:type',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: ':id',
          name: 'UserDetail',
          component: UserDetail,
          children: [
            {
              path: 'article',
              name: 'UserArticle',
              component: UserArticle
            },
            {
              path: 'comment',
              name: 'UserComment',
              component: UserComment
            },
            {
              path: 'collection',
              name: 'UserCollection',
              component: UserCollection
            },
            {
              path: 'star',
              name: 'UserStar',
              component: UserStar
            },
          ]
        }
      ]
    },
    {
      path: '/article',
      component: Article,
      children: [
        {
          path: '/',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: 'add',
          name: 'ArticleAdd',
          component: ArticleAdd
        },
        {
          path: ':id',
          name: 'ArticleDetail',
          component: ArticleDetail
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]

const router = new Router({
  mode: 'history',
  routes: [...main]
})

// let authRoutes = ['ArticleAdd'];

// router.beforeEach((to, from, next) => {
//   let user = store.state.user.user;

//   if (authRoutes.find(v => v === to.name) && tool.isBlank(user.id)) {
//     next('/auth/login');
//   } else {
//     next();
//   }
// })

export default router
