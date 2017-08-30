<template>
  <div class="content">
    <div v-for="(obj, index) of list" class="article-cell" :class="cellBgColor(index)">
      <article-cell @header="goUser" @article="goDetail" :value="obj"></article-cell>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        list: [{
          id: '1111',
          userId: 'aaaa',
          title: 'hahaha',
          tags: [{name:'八卦新闻'},{name:'篮球'},{name:'天下足球'}],
          content: '点苍台白露冷冷，幽僻处可有人行？在阅读中最大的乐趣是发现一个又一个人的人生。在文字记录的背后都是具体而又现实的人生。 同样都是文字，在不同的人的手里组合起来，所呈现出来的观感是不同的。在文字的后面，文字讲述'
        },{
          id: '2222',
          userId: 'bbbb',
          title: 'hahaha',
          tags: [{name:'八卦新闻'},{name:'天下足球'}],
          content: '点苍台白露冷冷，幽僻处可有人行？在阅读中最大的乐趣是发现一个又一个人的人生。在文字记录的背后都是具体而又现实的人生。 同样都是文字，在不同的人的手里组合起来，所呈现出来的观感是不同的。在文字的后面，文字讲述'
        }]
      }
    },
    methods: {
      ...mapActions([
        'goto'
      ]),
      cellBgColor(index) {
        return {'bg-color-1': index % 2 === 0,'bg-color-2': index % 2 === 1}
      },
      goUser(obj) {
        this.goto({
          name: 'UserDetail',
          params: {
            id: obj.userId
          }
        })
      },
      goDetail(obj) {
        this.goto({
          name: 'ArticleDetail',
          params: {
            id: obj.id
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .content {
    min-width: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 50px;
  }
  .article-cell {
    margin-top: 10px;
    border-radius: 10px;
  }
  .bg-color-1 {
    background-color: rgb(247, 247, 247);
  }
  .bg-color-2 {
    background-color: rgb(246, 254, 244);
  }
</style>

