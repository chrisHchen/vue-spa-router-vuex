<template lang="html">
  <el-breadcrumb separator="/" style='border-bottom: 1px solid #eaeefb; margin-bottom:20px; padding-bottom:15px'>
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{breadCrumb}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../constants.js'

export default {
  name: 'Breadcrumb',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      breadCrumb: types.LAYOUT_GET_BREADCRUME,
    }),
    // breadCrumb(){
    //   return this.$store.state.layout.breadCrumb
    // }
  }
}
</script>

<style lang="css">
</style>
