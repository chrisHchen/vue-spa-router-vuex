<template>
  <div class="login">
    <div class='tac ft-22 mb-15 ml-20'>登录</div>
    <el-form :model="form" label-width="100px" :rules="rules" ref="form">
      <el-form-item label="用户名" prop='loginName'>
        <el-input v-model="form.loginName" auto-complete="off" placeholder="admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='loginPwd'>
        <el-input type='password' v-model="form.loginPwd" auto-complete="off" placeholder="admin"></el-input>
      </el-form-item>
    </el-form>
    <div class='tar'>
      <div class='ft-12 tac mb-5 ml-20' style='color:red'>{{errMsg}}</div>
      <el-button @click='login' class='tac loginBtn' type="primary" :loading="loading">登 录</el-button>
    </div>
  </div>
</template>

<script>

import * as types from '../../constants.js'
import {setCookie} from '../../common/cookieUtil.js'

export default {
  name: 'login',
  data () {
    return {
      loading: false,
      errMsg:'',
      form:{
        loginName:'',
        loginPwd:''
      },
      rules:{
        loginName:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        loginPwd:[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs.form.validate((valid) => {
        if(valid){
          const form = this.form
          this.loading = true
          setTimeout(() => {
            setCookie('test_cookie', '0123')
            this.$router.replace('/admin')
            this.loading = false
            this.$store.dispatch(types.GLOBAL_SET_USERNAME, 'admin')
          }, 600)
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width:350px;
    margin: 50px auto 0;
  }
  .loginBtn{
    width:250px;
  }
</style>
