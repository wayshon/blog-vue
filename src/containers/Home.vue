<template>
  <div class="content">
    <div class="title-head">
      <el-input @keyup.13.native="getList" placeholder="请输入标题" icon="search" v-model="searchVal" :on-icon-click="getList"></el-input>
    </div>
    <div class="tags-content">
      <el-checkbox-group v-model="tags" @change="tagsChange">
        <el-checkbox-button v-for="(tag, index) in allTags" :label="tag" :key="index">{{tag.name}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div v-for="(obj, index) of list" class="article-cell" :class="cellBgColor(index)">
      <article-cell @header="goUser" @article="goDetail" :value="obj"></article-cell>
    </div>
    <div class="pagination-content">
      <el-pagination @current-change="handleCurrentChange" :current-page="page" :page-size="size" layout="total, prev, pager, next" :total="total">
      </el-pagination>
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
      allTags: [],
      list: [],
      page: 1,
      size: 10,
      total: 0
    }
  },
  methods: {
    ...mapActions([
      'getArticleList',
      'getTagList',
      'getArticleListByTag',
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
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    getList() {
      this.getArticleList({
        title: this.searchVal,
        page: this.page.toString(),
        size: this.size.toString(),
        onsuccess: (body, headers) => {
          headers['x-current-page'] ? this.page = +headers['x-current-page'] : null;
          headers['x-total'] ? this.total = +headers['x-total'] : null;

          this.list = body.data;
        }
      })
    },
    getListByTags() {
      this.getArticleListByTag({
        tags: this.tags.map(v => v.name),
        page: this.page.toString(),
        size: this.size.toString(),
        onsuccess: (body, headers) => {
          // headers['x-current-page'] ? this.page = +headers['x-current-page'] : null;
          // headers['x-total'] ? this.total = +headers['x-total'] : null;

          this.list = body.data;
        }
      })
    },
    getAllTags() {
      this.getTagList({
        // page: this.page.toString(),
        // size: this.size.toString(),
        onsuccess: (body, headers) => {
          // headers['x-current-page'] ? this.page = +headers['x-current-page'] : null;
          // headers['x-total'] ? this.total = +headers['x-total'] : null;

          this.allTags = body.data;
        }
      })
    },
    tagsChange(event) {
      if (this.tags.length > 0) {
        this.getListByTags();
      } else {
        this.getList();
      }
    }
  },
  mounted() {
    this.getList();
    this.getAllTags();
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
  width: 100%;
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

@media screen and (max-width: 640px) {
  .title-head {
    width: 100%;
  }
}

.pagination-content {
  margin-top: 20px;
}
</style>

