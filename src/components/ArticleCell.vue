<template>
    <div>
        <header @click="header">
            <img src="https://placekitten.com/28/28" />
            <span>隔壁老王</span> - <span>2017-08-25 16:31</span>
        </header>
        <article @click="article">
            <div>{{value.title}}</div>
            {{value.content.slice(20)}}...
        </article>
        <footer>
            <span>八卦新闻</span> <span>13次阅读</span> <span>13次收藏</span> <span>13次赞</span> <span>13评论</span>
        </footer>
    </div>
</template>

<script>
  export default{
    props: {
      value: {
        type: Object,
        default: {}
      }
    },
    methods: {
      header() {
        this.$emit('header', this.value);
      },
      article() {
        this.$emit('article', this.value);
      },
    }
  }
</script>
