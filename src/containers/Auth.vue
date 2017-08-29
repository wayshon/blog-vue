<template>
  <div class="content">
    <div class="input-content">
      <span>用户名</span>
      <el-input v-model="userName" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input-content">
      <span>密码</span>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <div v-if="isRegist">
      <div class="input-content">
        <span>昵称</span>
        <el-input v-model="nickName" placeholder="请输入昵称"></el-input>
      </div>
      <div class="input-content">
        <span>邮箱</span>
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
      </div>
      <div class="input-content">
        <span>手机号</span>
        <el-input v-model="mobile" placeholder="请输入手机号"></el-input>
      </div>
      <div class="input-content">
        <span>头像</span>
        <el-input v-model="avatar" placeholder="请输入头像"></el-input>
      </div>
    </div>
    <el-button v-if="isRegist" @click.native="regist">注册</el-button>
    <el-button v-else @click.native="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Auth',
    data() {
      return {
        userName: "",
        password: "",
        nickName: "",
        email: "",
        mobile: "",
        avatar: "",
        manager: 0
      }
    },
    computed: {
      isRegist() {
        return !(this.$route.params.type === 'login')
      }
    },
    methods: {
      regist() {

      },
      login() {

      }
    }
  }
</script>
<style lang="less" scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .input-content {
    display: flex;
    align-items: center;
      margin-bottom: 10px;
      & > span {
        display: inline-block;
        min-width: 50px;
        text-align: end;
        padding-right: 10px;
      }
      .el-input {
        width: 70%;
      }
  }

</style>
