<template>
  <div id="app">
    <header class="header-container">
      <div class="header-select">
        <a class="nav-title" @click="goto('/auth')">Sign up</a>
        <a class="nav-title" @click="goto('/auth')">Log in</a>
        <a class="nav-title" @click="goto('/article/add')">Add</a>
      </div>
    </header>
    <router-view class="first-router" v-loading.body="Interface.loading.show"></router-view>
    <footer class="copy-right">
      <span>Powered By Wayshon.</span>
      <span>Copyright©2017-2017  All Rights Reserved.</span>
    </footer>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
  export default {
    name: 'App',
    computed: {
      ...mapState({
        Interface: state => state.utils.Interface,
      }),
    },
    watch: {
      'Interface.alert.show'(v) {
        if (v) {
          this.$alert(this.Interface.alert.content, this.Interface.alert.title, {
            confirmButtonText: '确定',
            callback: action => {
              this.$store.state.utils.Interface.alert.show = false;
              if (this.Interface.alert.code == 401) this.goto({path: '/auth'})
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
        'goto'
      ]),
    },
    mounted() {
      
    }
  }
</script>

<style lang="less">
  @import "./assets/styles/index.less";
</style>
