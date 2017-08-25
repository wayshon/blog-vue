<template>
  <div style="padding: 20px 0">
    <el-input v-model="title" placeholder="请输入标题"></el-input>
    <el-button @click.native="send">发送</el-button>
    <mavon-editor v-model="content"/>

  </div>
</template>

<script>
let temp = ''
  export default {
    name: 'ArticleAdd',
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      send() {
        temp = this.content;
        this.content = '';
        setTimeout(() => {
          this.content = temp
        }, 1500)
      }
    }
  }
</script>
