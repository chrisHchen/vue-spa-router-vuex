<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import * as types from './constants.js'

export default {
  name: 'app',
  created(){
    this.$store.dispatch(types.GLOBAL_CALL_DETAIL)
  }
}
</script>
