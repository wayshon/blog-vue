<template>
  <div class="content">
    <div class="title-head">     
      <el-input placeholder="请输入标题" icon="search" v-model="searchVal" :on-icon-click="getList"></el-input>
    </div>
    <div class="tags-content">
      <el-checkbox-group v-model="tags">
        <el-checkbox-button v-for="(tag, index) in allTags" :label="tag" :key="index">{{tag.name}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div v-for="(obj, index) of list" class="article-cell" :class="cellBgColor(index)">
      <article-cell @header="goUser" @article="goDetail" :value="obj"></article-cell>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      searchVal: '',
      tags: [],
      allTags: [{name: '标签1'},{name: '标签2'},{name: '标签3'},{name: '标签4'}],
      list: [{
        "id": "xxxxxxxxxxxxxxxx",
        "user_id": "xxxxxxxxxxxxxxxx",
        "nick_name": "xxxxxxxxxxxxxxxx",
        "title": "ttttt",
        "content": "xxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        "tags": [],
        "reprint_count": 10,
        "read_count": 10,
        "comment_count": 10,
        "praise_count": 10,
        "create_at": "",
        "update_at": ""
      }, {
        "id": "xxxxxxxxxxxxxxxx",
        "user_id": "xxxxxxxxxxxxxxxx",
        "nick_name": "xxxxxxxxxxxxxxxx",
        "title": "ttttt",
        "content": "xxxxxxxxxxxxxxxx",
        "tags": [],
        "reprint_count": 10,
        "read_count": 10,
        "comment_count": 10,
        "praise_count": 10,
        "create_at": "",
        "update_at": ""
      }, {
        "id": "xxxxxxxxxxxxxxxx",
        "user_id": "xxxxxxxxxxxxxxxx",
        "nick_name": "xxxxxxxxxxxxxxxx",
        "title": "ttttt",
        "content": "xxxxxxxxxxxxxxxx",
        "tags": [],
        "reprint_count": 10,
        "read_count": 10,
        "comment_count": 10,
        "praise_count": 10,
        "create_at": "",
        "update_at": ""
      }]
    }
  },
  methods: {
    ...mapActions([
      'articleList',
      'goto'
    ]),
    cellBgColor(index) {
      return { 'bg-color-1': index % 2 === 0, 'bg-color-2': index % 2 === 1 }
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
    },
    getList() {
      this.articleList({
        title: this.searchVal,
        // page: this.page.toString(),
        // size: this.size.toString(),
        onsuccess: (body, headers) => {
          // headers['x-current-page'] ? this.page = +headers['x-current-page'] : null;
          // headers['x-total'] ? this.total = +headers['x-total'] : null;

          this.list = body.data;
        }
      })
    },
    getListByTags() {
      this.articleList({
        tags: this.tags,
        // page: this.page.toString(),
        // size: this.size.toString(),
        onsuccess: (body, headers) => {
          // headers['x-current-page'] ? this.page = +headers['x-current-page'] : null;
          // headers['x-total'] ? this.total = +headers['x-total'] : null;

          this.list = body.data;
        }
      })
    }
  },
  mounted() {
    // this.getList();
  }
}
</script>
<style lang="less" scoped>
.content {
  // min-width: 800px;
  // display: flex; // align-items: center;
  // flex-direction: column;
  padding: 20px 50px;
}
.title-head {
  width: 50%;
  margin-bottom: 10px;
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

