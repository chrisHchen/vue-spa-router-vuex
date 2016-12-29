<template>
  <div class="dis-cell" :style="{width:width, textAlign: 'left'}">
    <el-menu :default-active="active" class="el-menu-vertical-demo" :router="router" style='min-height:1000px'>
      <template v-for="menu in menus">
          <el-menu-item :index="menu.path"><i :class="menu.icon"></i>{{menu.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menu from './menu'
import * as types from '../constants.js'

const findMenuName = function(path) {
  let name = ''
  menu.find((item) => {
    if (item.path == path) {
      return name = item.name
    }
  })
  return name
}

export default {
  name: 'leftMenu',
  data () {
    return {
      router: true,
      menus: menu,
      active:''
    }
  },
  created(){
    this.active = this.$route.path
    this.$store.dispatch(types.LAYOUT_SET_BREADCRUME, findMenuName(this.$route.path))
  },
  watch: {
    '$route' (to, from) {
      this.active = to.path
      this.$store.dispatch(types.LAYOUT_SET_BREADCRUME, findMenuName(to.path))
    }
  },
  methods: {

  },
  props: ['width']
}
</script>
