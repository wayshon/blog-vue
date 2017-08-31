<template>
  <div id="app">
    <header class="header-container">
      <div class="header-select">
        <a v-show="$route.name !== 'Home'" class="nav-title" @click="goto('/home')">Home</a>
        <a v-show="!user.id" class="nav-title" @click="goto('/auth/register')">Sign up</a>
        <a v-show="!user.id" class="nav-title" @click="goto('/auth/login')">Log in</a>
        <a v-show="user.id" class="nav-title" @click="logout">Log out</a>
        <a v-show="user.id" class="nav-title" @click="goto('/article/add')">Add</a>
      </div>
      <div v-show="$route.name === 'Home' || $route.name === 'NotFound'  || $route.name === 'Auth'">
        <h1 class="header-title">My Blog</h1>
        <p class="header-sub-title">Word is cheap, show me the money</p>
      </div>
    </header>
    <router-view class="first-router" v-loading.body="Interface.loading.show"></router-view>
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
  computed: {
    ...mapState({
      Interface: state => state.utils.Interface,
      user: state => state.user.user,
    }),
  },
  watch: {
    'Interface.alert.show'(v) {
      if (v) {
        this.$alert(this.Interface.alert.content, this.Interface.alert.title, {
          confirmButtonText: '确定',
          callback: action => {
            this.$store.state.utils.Interface.alert.show = false;
            if (this.Interface.alert.code == 401) this.goto({ path: '/auth' })
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
      this.setUser();
      this.goto('/auth/login')
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less">
@import "./assets/styles/index.less";
</style>
