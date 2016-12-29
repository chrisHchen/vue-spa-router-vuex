import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/' , redirect:'/login' },
    require('./components/Login/index.js').default,
    require('./layout/route.js').default,
  ]
})

export default router
