<template>
  <div class="content">
    <div>
      <div class="input-content">
        <span>用户名</span>
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      </div>
      <div class="input-content">
        <span>密码</span>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </div>
        <div class="input-content"  v-if="!isRegist">
          <span></span>
          <el-button type="primary" @click.native="loginFun">登    录</el-button>
        </div>
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
        <div class="input-content">
          <span></span>
          <el-button type="primary" @click.native="registFun">注    册</el-button>
        </div>
    </div>
  </div>
</template>

<script>
let base = require('x-base64');
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
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
    ...mapActions([
      'login',
      'regist',
      'setUser',
      'showtoast',
      'goto'
    ]),
    registFun() {
      this.regist({
        user_name: "wayshon",
        password: "123456",
        nick_name: "王旭",
        email: "wayshon@qq.com",
        mobile: "15766666666",
        avatar: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/30d56dac6deed198f47e593eb89d8333_121_121.jpg",
        onsuccess: body => {
          this.goto('/auth/login')
        }
      })
    },
    loginFun() {
      this.login({
        user_name: 'wayshon',
        password: '123456',
        onsuccess: body => {
          // this.goto({ name: 'Home' })
          try {
            localStorage.setItem('Authorization', body.data.token);

            let jwt = body.data.token.split('.')[1];
            let decode = base.decode(jwt);
            let userId = JSON.parse(decode).user;
            this.setUser({id: userId}).then(() => {
              this.goto({name: 'Home'})
            })
          } catch(e) {
            this.showtoast({text: '获取token有误', type: 'error'})
          }
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 350px;
  margin: 20px auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
}

.input-content {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &>span {
    display: inline-block;
    min-width: 50px;
    text-align: end;
    padding-right: 10px;
  }
  .el-input,
  .el-button {
    width: 70%;
  }
}
.register{
  display: flex;
  align-items: center;
  min-width: 100px;
  .el-button{
    width: 100%;
    margin: 0 auto;
  }
}
  @media screen  and (max-width: 414px) {
    .content {
      width: 250px;
    }
  }
</style>
