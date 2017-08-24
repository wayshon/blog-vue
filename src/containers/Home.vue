<template>
  <div>
    {{msg}}
    <el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">搜索</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'home'
      }
    }
  }
</script>
