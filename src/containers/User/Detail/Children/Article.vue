<template>
  <div class="content">
    <div class="search">
      <el-input @keyup.13.native="getList" placeholder="请输入标题" icon="search" v-model="searchVal" :on-icon-click="getList"></el-input>
      <!-- <div class="tags-content">
          <el-checkbox-group v-model="tags">
            <el-checkbox-button v-for="(item, index) in allTags" :label="item.tag_name" :key="index">{{item.tag_name}}</el-checkbox-button>
          </el-checkbox-group>
        </div> -->
    </div>
    <div v-for="(obj, index) of list" class="article-cell">
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
  name: 'UserArticle',
  data() {
    return {
      searchVal: '',
      // tags: [],
      // allTags: [],
      list: [],
      page: 1,
      size: 10,
      total: 0
    }
  },
  methods: {
    ...mapActions([
      'getArticleListByUserId',
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
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    getList() {
      this.getArticleListByUserId({
        title: this.searchVal,
        // page: this.page.toString(),
        // size: this.size.toString(),
        user_id: this.$route.params.id,
        onsuccess: (body, headers) => {
          headers['x-current-page'] ? this.page = +headers['x-current-page'] : null;
          headers['x-total'] ? this.total = +headers['x-total'] : null;

          this.list = body.data;
        }
      })
    }
  },
  mounted() {
    this.getList();
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 0 0; // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 80%
}

.search {
  overflow: hidden;
  margin-bottom: 10px;
  .el-input {
    float: left;
    width: 50%
  }
  .tags-content {
    float: right;
    padding-left: 5%;
    width: 45%
  }
}

.article-cell {
  margin-top: 10px;
  border-bottom: 1px solid gray;
}

.article-cell:last-child {
  border: none;
}

@media screen and (max-width: 880px) {
  .search {
    .el-input {
      float: left;
      width: 80%
    }
    .tags-content {
      float: left;
      padding-left: 0;
      width: 100%;
      margin-top: 10px;
    }
  }
}

.pagination-content {
  margin-top: 20px;
}
</style>