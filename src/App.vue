<template>
  <div id="app" v-loading.body="Interface.loading.show">
    <header class="header-container">
      <div class="nav-banner" v-bind:class="{ 'nav-bg': !isHasbg }">
        <nav>
          <router-link to="/home">Home</router-link>
          <router-link v-show="!user.id" to="/auth/register">Sign up</router-link>
          <router-link v-show="!user.id" to="/auth/login">Log in</router-link>
          <router-link v-show="user.id" to="/article/add">Add</router-link>
          <router-link v-show="user.id" :to="`/user/${user.id}/article`">Mine</router-link>
          <a v-show="user.id" @click="logout">Log out</a>
        </nav>
      </div>
      <div v-show="isHasbg">
        <h1 class="header-title">My Blog</h1>
        <p class="header-sub-title">Talk is cheap, show me the code</p>
      </div>
    </header>
    <router-view class="first-router"></router-view>
    <footer class="copy-right">
      <span>Powered By Wayshon.</span>
      <span>Copyright©2017-2017 All Rights Reserved.</span>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      Interface: state => state.utils.Interface,
      user: state => state.user.user,
    }),
    isHasbg(){
        return this.$route.name === 'Home' || this.$route.name === 'NotFound'  || this.$route.name === 'Auth'
    }
  },
  watch: {
    'Interface.alert.show'(v) {
      if (v) {
        this.$alert(this.Interface.alert.content, this.Interface.alert.title, {
          confirmButtonText: '确定',
          callback: action => {
            this.$store.state.utils.Interface.alert.show = false;
            if (this.Interface.alert.code == 401) {
              localStorage.removeItem("Authorization")
              console.log('=======================  401')
              this.goto({ path: '/auth/login' })
            }
          }
        });
      }
    },
    'Interface.toast.show'(v) {
      if (v) {
        this.$store.state.utils.Interface.toast.show = false;
        this.$message({
          showClose: true,
          message: this.Interface.toast.text,
          type: this.Interface.toast.type
        });
      }
    }
  },
  methods: {
    ...mapActions([
      'goto',
      'setUser'
    ]),
    logout() {
      localStorage.removeItem("Authorization")
      this.setUser().then(() => this.goto('/auth/login'));
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less">
@import "./assets/styles/index.less";
</style>
