<template>
    <div class="cell">
        <header @click="header">
            <img width="28" height="28" :src="value.avatar" />
            <span>{{value.nick_name}}</span> - <span>{{new Date(value.create_at).toLocaleString()}}</span>
        </header>
        <article @click="article">
            <div class="cell-title-content">
              <h3 class="cell-title">{{value.title}}</h3>
              <h5 v-for="(obj ,index) of value.tags" class="cell-label" :style="{borderColor:choose(obj)}">{{obj}}</h5>
            </div>
            <article v-show="!hideContent" class="cell-content" v-html="markContent(value.content)"></article>
        </article>
        <footer class="cell-footer">
            <span>{{value.read_count}}次阅读</span>
            <span>{{value.comment_count}}评论</span>
            <span>{{value.praise_count}}次赞</span>
        </footer>
    </div>
</template>

<script>
  let marked = require('marked');
  marked.setOptions({
    highlight: function(code) {
      return require('highlight.js').highlightAuto(code).value;
    }
  });

  let colors = ["#9DDBFB", "#DE96E4", "#BEC8EB", "#93E1DE", "#CDB7AE", "#BECED5", "#FFBA8D", "#97E1E9", "#EDB5B5", "#FFDB70"];
  export default{
    props: {
      value: {
        type: Object,
        default: {}
      },
      hideContent: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      header() {
        this.$emit('header', this.value);
      },
      article() {
        this.$emit('article', this.value);
      },
      choose(val) {
        let result = '';
        if (typeof val === 'string') {
          result = val.charCodeAt(0).toString()
          let colorsign = parseInt(result.charAt(result.length - 1))
          let color = colors[colorsign]
          return color
        } else {
          return "#F5F6F6"
        }
      },
      markContent(v) {
        if (v) {
          return marked(v.slice(0, 80))
        }
        return ''
      }
    }
  }
</script>
<style lang="less" scoped>
  .cell {
    padding: 10px 10px;
  }

  .cell-title-content {
    display: flex;
    padding-top: 10px;
  }

  .cell-label {
    margin-left: 10px;
    border: 2px #fff solid;
    border-radius: 5px;
  }

  .cell-content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 10px;
  }

  .cell-footer {
    display: flex;
    padding-top: 10px;
    span{
      margin-right: 10px;
      color: rgb(133, 144, 166);
    }
  }

  .cell-footer-content {
    
  }

</style>
