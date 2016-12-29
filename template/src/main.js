// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/scss/common.scss'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
