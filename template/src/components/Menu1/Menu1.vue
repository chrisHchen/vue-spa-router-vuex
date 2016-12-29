<template lang="html">
  <div>
    <el-form :model="queryForm" label-width="80px" ref="queryForm" class="bd-block">
      <el-row :gutter="10">
        <el-col :span="6" :offset='8'>
          <el-form-item label="用户名">
            <el-input v-model="queryForm.nickName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="tac">
        <el-button style='width:100px' type='primary' :loading="search_loading" @click="search()">查 询</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>

export default {
  data(){
    return{
      queryForm:{
        nickName:''
      },
      search_loading: false
    }
  },
  computed:{

  },
  methods:{

  }
}
</script>

<style lang="css">
</style>
