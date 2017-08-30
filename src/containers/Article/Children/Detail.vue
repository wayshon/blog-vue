<template>
  <div>
    <article v-html="content"></article>
  </div>
</template>

<script>
var marked = require('marked');
marked.setOptions({
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'ArticleDeatil',
  data() {
    return {
      detail: ''
    }
  },
  computed: {
    content() {
      if (this.detail.content)
        return marked(this.detail.content)
      return ''
    }
  },
  methods: {
    ...mapActions([
      'articleDetail',
      'goto'
    ]),
    getDetail() {
      this.articleDetail({
        id: this.$route.params.id,
        onsuccess: body => {
          if (body.data) {
            this.detail = body.data;
          }
        }
      })
    }
  },
  mounted() {
    this.getDetail();
  }
}
</script>
