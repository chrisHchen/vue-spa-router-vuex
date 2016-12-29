const route = {
  path: '/login',
  component: r => require.ensure([], () => r(require('./Login.vue')), 'login')
}

export default route
