import { getCookie } from '../common/cookieUtil.js'
import menu from './menu'
const route = {
  path: '/admin',
  component: r => require.ensure([], () => r(require('./index.vue')), 'layout'),
  children: [
    { path: '/admin' , redirect:menu[0].path },
    require('../components/Menu1').default,
    require('../components/Menu2').default,
    require('../components/Menu3').default,
  ],
  beforeEnter (to, from, next) {
    //if no cookie redirect to login
    if(!getCookie('test_cookie')){
      return next({path:'/run/login'})
    }
    next()
  },
}

export default route
