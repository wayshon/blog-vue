<template>
  <div>
    <el-input v-model="userName" placeholder="请输入用户名"></el-input>
    <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click.native="loginAction">登录</el-button>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
  export default {
    name: 'Auth',
    data () {
      return {
        userName: '',
        password: '',
        nickName: '',
        email: '',
        mobile: ''
      }
    },
    methods: {
      ...mapActions([
        'goto'
      ]),
      loginAction() {
          this.goto('/home')
      }
    },
    mounted() {
      
    }
  }
</script>
