<template>
  <div>
    <Top></Top>
    <div class='dis-table-fixed main'>
      <leftMenu width='16%'></leftMenu>
      <div class="container dis-cell" style='width:84%'>
        <Breadcrumb></Breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from './LeftMenu'
import Breadcrumb from './Breadcrumb'
import Top from './Top'

export default {
  name: 'layout',
  data () {
    return {

    }
  },
  components:{LeftMenu, Breadcrumb, Top}
}
</script>

<style scoped>
  .container{
    padding:20px;
  }
  .main{
    width:1200px;
    margin: 2px auto 10px;
  }
</style>
