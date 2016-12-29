const route = {
  path: 'menu3',
  component: r => require.ensure([], () => r(require('./Menu3.vue')), 'menu3')
}

export default route
