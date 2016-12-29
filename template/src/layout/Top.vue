<template>
<div class='topmenu-wrap'>
  <div class='topmenu'>
    <ul class="fr topmenu-item">
      <li>你好：{{username}}</li>
      <li @click='logout' class='logout'>登出</li>
    </ul>
  </div>
</div>
</template>

<script>
import { delCookie } from '../common/cookieUtil.js'
import {mapGetters} from 'vuex'
import * as types from '../constants.js'

export default {
  name: 'top',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      username: types.GLOBAL_GET_USERNAME,
    }),
    // username(){
    //   console.log(this.$store.state.username)
    //   return this.$store.state.username
    // }
  },
  created(){

  },
  methods: {
    logout() {
      setTimeout(() => {
        delCookie('test_cookie')
        this.$store.commit(types.GLOBAL_RESET_USERNAME)
        this.$router.replace('/login')
      }, 300)
    }
  }
}
</script>
<style lang='scss' scoped>

.topmenu-wrap {
    background-color: rgb(32, 160, 255);
    width: 100%;
    height: 60px;
    color: #fff;
    .topmenu {
        margin: 0 auto;
        width: 1200px;
    }
    .topmenu-item > li {
        display: inline-block;
    }
    .logout {
        cursor: pointer;
        &:hover {
            color: rgb(32, 160, 255);
        }
    }
}
</style>
