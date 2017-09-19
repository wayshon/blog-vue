<template>
  <div class="content">
    <el-input placeholder="请输入标题" icon="search" v-model="searchVal" :on-icon-click="getList"></el-input>
    <div class="tags-content">
      <el-checkbox-group v-model="tags">
        <el-checkbox-button v-for="(tag, index) in allTags" :label="tag" :key="index">{{tag.name}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div v-for="(obj, index) of list" class="article-cell">
      <article-cell :hideContent="true" @header="goUser" @article="goDetail" :value="obj"></article-cell>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'UserArticle',
  data() {
    return {
      searchVal: '',
      tags: [],
      allTags: [{ name: '标签1' }, { name: '标签2' }, { name: '标签3' }, { name: '标签4' }],
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
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-cell {
  margin-top: 10px;
  border-bottom: 1px solid gray;
}

.article-cell:last-child {
  border: none;
}
</style>