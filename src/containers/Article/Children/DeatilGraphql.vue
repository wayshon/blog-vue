<template>
  <div>
    <div class="article-content">
      <h1>{{detail.title}}</h1>
      <div class="user-info">
        <p>作者：{{detail.nick_name}}</p>
        <div>标签：
          <span v-for="item in detail.tags">{{item.tag_name}} </span>
        </div>
        <div>
          <span>阅读{{detail.read_count}}</span>
          <span>评论{{detail.comment_count}}</span>
          <span>赞{{detail.praise_count}}</span>
        </div>
        <div>
          <span>创建于: {{new Date(detail.create_at).toLocaleString()}}</span>
        </div>
        <el-popover ref="popover" placement="right" width="210" trigger="click">
          <p>分享到朋友圈</p>
          <img width="200" height="200" :src="shareUrl" />
          <p>
            打开微信，点击底部的“发现”，<br> 使用“扫一扫”即可将网页分享至朋友圈。
          </p>
        </el-popover>
        <el-button type="primary" icon="share" class="share" @click.native="share" v-popover:popover></el-button>
        <!-- <el-button class="share" @click.native="share" v-popover:popover></el-button> -->
        <!-- <div>
            <img v-show="shareUrl" width="200" height="200" :src="shareUrl" />
          </div> -->
      </div>
      <article v-html="content"></article>
      <div class="star-content">
        <img :src="starPngSrc" @click="handelStar"></img>
        <!-- <p>{{detail.praise_count || 0}}</p> -->
      </div>
      
      <div class="comment-content">
        <h1>评论: ({{comments.length || 0}}条)</h1>
        <el-input type="textarea" :maxlength="50" :autosize="{maxRows: 3}" placeholder="请输入评论内容, 50字" v-model="commentContent"></el-input>
        <div class="submit">
            <span >{{commentContent.length}} / 50</span>
            <el-button type="primary" :disabled="!commentContent || commentContent.length == 0" @click.native="postComment">提交</el-button>
        </div>
        <comment class="comment-list" v-for="(item, index) in comments" :value="item" :key="index"></comment>
      </div>
    </div>

  </div>
</template>

<script>
import gql from 'graphql-tag'

let noStarPng = require("../../../assets/images/zan_no.png"),
    starPng = require("../../../assets/images/zan.png");

let marked = require('marked');
marked.setOptions({
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

let QRCode = require('qrcode')

import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'ArticleDeatil',
  data() {
    return {
      shareUrl: '',
      commentContent: '',
      hasStar: false,
      detail: {}
    }
  },
  computed: {
    content() {
      if (this.detail.content)
        return marked(this.detail.content)
      return ''
    },
    starPngSrc() {
      if (this.hasStar)
        return starPng;
      return noStarPng;
    },
    comments() {
        return this.detail.comments || []
    }
  },
  methods: {
    ...mapActions([
      'addComment',
      'getPraise',
      'addPraise',
      'removePraise',
      'showtoast',
      'goto'
    ]),
    share() {
      QRCode.toDataURL(location.href, (err, url) => {
        this.shareUrl = url;
      })
    },
    postComment() {
      this.addComment({
        article_id: this.$route.params.id,
        content: this.commentContent,
        onsuccess: body => {
          this.getCommentByArticle();
        }
      })
    },
    getStar() {
      if (!localStorage.getItem('Authorization')) return;

      this.getPraise({
        article_id: this.$route.params.id,
        onsuccess: body => {
          if (body.data.length && body.data.length > 0) {
            this.hasStar = true;
          } else {
            this.hasStar = false;
          }
        }
      })
    },
    handelStar() {
      if (this.hasStar) {
        this.removePraise({
          article_id: this.$route.params.id,
          content: this.commentContent,
          onsuccess: body => {
            this.hasStar = false;
          }
        })
      } else {
        this.addPraise({
          article_id: this.$route.params.id,
          content: this.commentContent,
          onsuccess: body => {
            this.hasStar = true;
          }
        })
      }
    },
    getDetail() {
        this.$apollo.query({
            query: gql`query article($id: Int!) {
                article(id: $id) {
                            id
                            user_id
                            nick_name
                            title
                            content
                            reprint_count
                            read_count
                            comment_count
                            praise_count
                            create_at
                            update_at
                            comments {
                            id
                            user_id
                            nick_name
                            avatar
                            article_id
                            content
                            create_at
                            update_at
                    }
                    tags {
                        article_id
                        tag_name
                    }
                }
            }`,
            variables: {
                id: this.$route.params.id,
            },
        }).then((obj) => {
            console.log(obj);
            if (obj.data.article) {
                this.detail = obj.data.article;
            } else {
                this.showtoast({text: '找不到文章', type: 'error'})
            }
        }).catch((error) => {
            console.error(error);
        });
    },
  },
  mounted() {
    this.getDetail();
    this.getStar();
  }
}
</script>

<style lang="less" scoped>
.article-content {
  padding: 20px 0;
  width: 65%;
  margin: 0 auto;
  h1 {
    line-height: 2.5;
    border-bottom: 1px solid #d3d3d3;
  }
  .user-info {
    margin: 20px auto;
    line-height: 1.5;
    position: relative;
    .share {
      // height: 58px;
      // width: 56px;
      // border: none;
      // background: url("../../../assets/images/share.jpg") no-repeat center;
      position: absolute;
      top: 0;
      right: 0
    }
  }
}

@media (max-width: 48rem) {
  .article-content {
    width: 85%;
    min-width: 0px;
    overflow: hidden;
  }
}

.comment-list {
  margin-top: 20px;
}

.star-content {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 38px;
    width: 40px
  }
  p{
    margin-left:10px;
  }
}
  .submit{
    text-align: right;  
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 20px;
    margin: 10px 0;
    span{
      margin-right: 10px
    }

  }
</style>
