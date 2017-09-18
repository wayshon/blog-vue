<template>
    <div class="cell">
        <header @click="header">
            <img src="https://placekitten.com/28/28" />
            <span>隔壁老王</span> - <span>2017-08-25 16:31</span>
        </header>
        <article @click="article">
            <div class="cell-title-content">
              <h3 class="cell-title">{{value.title}}</h3>
              <h5 v-for="(obj ,index) of value.tags" class="cell-label" :style="{borderColor:choose(obj)}">{{obj}}</h5>
            </div>
            <!-- <p class="cell-content">{{value.content}}</p> -->
        </article>
        <footer class="cell-footer">
            <h5 class=""></h5>
            <span>13次阅读</span> <span>13次收藏</span> <span>13次赞</span> <span>13评论</span>
        </footer>
    </div>
</template>

<script>
  let colors = ["#9DDBFB", "#DE96E4", "#BEC8EB", "#93E1DE", "#CDB7AE", "#BECED5", "#FFBA8D", "#97E1E9", "#EDB5B5", "#FFDB70"];
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
  }

  .cell-footer-content {
    
  }

</style>
