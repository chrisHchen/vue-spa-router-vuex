const route = {
  path: 'menu2',
  component: r => require.ensure([], () => r(require('./Menu2.vue')), 'menu2')
}

export default route
