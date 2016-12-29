const route = {
  path: 'menu1',
  component: r => require.ensure([], () => r(require('./Menu1.vue')), 'menu1')
}

export default route
