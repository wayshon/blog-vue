<template>
  <div>
    home
    <el-button @click.native="goDetail">去详情</el-button>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
  export default {
    name: 'Home',
    data () {
      return {
        
      }
    },
    methods: {
      ...mapActions([
        'goto'
      ]),
      goDetail() {
          this.goto('/detail')
      }
    },
    mounted() {
      
    }
  }
</script>
