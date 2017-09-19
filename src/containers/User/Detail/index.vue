<template>
  <div class="content">
    <div class="info">
      <div><img width="50" height="50" :src="user.avatar"><span>{{user.nick_name}}</span></div>
      <p>邮箱: {{user.email}}</p>
      <p>电话: {{user.mobile}}</p>
      <p>创建于: {{user.create_at}}</p>
    </div>
    <el-tabs v-model="tabVal" @tab-click="tabClick">
      <el-tab-pane label="文章" name="article"></el-tab-pane>
      <el-tab-pane label="收藏" name="collection"></el-tab-pane>
      <el-tab-pane label="评论" name="comment"></el-tab-pane>
      <el-tab-pane label="赞" name="star"></el-tab-pane>
    </el-tabs>
    
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'UserDeatil',
    data() {
      return {
        tabVal: 'article',
        user: {
          "nick_name": "wayshon",
          "email": "wayshon@fortrun.cn",
          "mobile": "15766666666",
          "avatar": "https://www.baidu.com/img/bd_logo1.png",
          "create_at": "2017-02-01 10:10"
        }
      }
    },
    methods: {
      tabClick(tab, event) {
        console.log(tab.name);
        switch (tab.name) {
          case 'article':
            this.$router.push({
              name: 'UserArticle',
              params: {
                id: '666'
              }
            })
            break;
          case 'collection':
            this.$router.push({
              name: 'UserCollection',
              params: {
                id: '666'
              }
            })
            break;
          case 'comment':
            this.$router.push({
              name: 'UserComment',
              params: {
                id: '666'
              }
            })
            break;
          case 'star':
            this.$router.push({
              name: 'UserStar',
              params: {
                id: '666'
              }
            })
            break;
          default:
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .content {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
