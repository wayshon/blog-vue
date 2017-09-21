<template>
  <div class="container">
    <div class="info">
      <div class="info-title">
        <img width="50" height="50" :src="userInfo.avatar">
        <span>{{userInfo.nick_name}}</span>
      </div>
      <p>邮箱: {{userInfo.email}}</p>
      <p>电话: {{userInfo.mobile}}</p>
      <p>创建于: {{new Date(userInfo.create_at).toLocaleString()}}</p>
    </div>
    <div class="content">
      <el-tabs v-model="tabVal" @tab-click="tabClick">
        <el-tab-pane label="文章" name="article"></el-tab-pane>
        <el-tab-pane label="收藏" name="collection"></el-tab-pane>
        <el-tab-pane label="评论" name="comment"></el-tab-pane>
        <el-tab-pane label="赞" name="star"></el-tab-pane>
      </el-tabs>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'UserDeatil',
  data() {
    return {
      tabVal: 'article',
      userInfo: {}
    }
  },
  methods: {
    ...mapActions([
      'getUserInfo',
      'goto'
    ]),
    tabClick(tab, event) {
      switch (tab.name) {
        case 'article':
          this.goto({
            name: 'UserArticle',
            params: {
              id: this.$route.params.id
            }
          })
          break;
        case 'collection':
          this.goto({
            name: 'UserCollection',
            params: {
              id: this.$route.params.id
            }
          })
          break;
        case 'comment':
          this.goto({
            name: 'UserComment',
            params: {
              id: this.$route.params.id
            }
          })
          break;
        case 'star':
          this.goto({
            name: 'UserStar',
            params: {
              id: this.$route.params.id
            }
          })
          break;
        default:
      }
    },
    getUser() {
      this.getUserInfo({
        id: this.$route.params.id,
        onsuccess: body => {
          if (body.data) {
            this.userInfo = body.data;
          } else {
            this.showtoast({ text: '找不到用户', type: 'error' })
          }
        }
      })
    },
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
  display: flex; // flex-direction: column;
  // align-items: center;
}

.info {
  flex: 1;
  .info-title {
    margin-bottom: 10px;
    span {
      display: inline-block;
      line-height: 50px;
      margin-left: 10px;
    }
  }
  p {
    margin: 10px 0;
  }
}

.content {
  flex: 3;
  padding: 0 20px
}

@media screen and (max-width: 440px) {
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column; // align-items: center;
  }
  .content {
    // flex:3;
    padding: 0
  }
}
</style>
