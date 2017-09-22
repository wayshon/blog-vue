// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    // uri: 'http://api.wayshon.com/graphql',
    // uri: 'http://106.15.203.220:3000/graphql',
    uri: 'http://localhost:3000/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  clients: {
    a: apolloClient,
  },
  defaultClient: apolloClient,
})

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import VueMarkdown from 'vue-markdown'
Vue.component('vue-markdown', VueMarkdown);

// Components
Vue.component('article-cell', require('./components/ArticleCell.vue'))
Vue.component('comment', require('./components/Comment.vue'))


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  apolloProvider,
  template: '<App/>',
  components: { App }
})
