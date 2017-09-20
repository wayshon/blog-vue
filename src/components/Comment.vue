<template>
    <div class="cell">
        <header @click="header">
            <img width="28" height="28" :src="value.avatar" />
            <span>{{value.nick_name}}</span>
        </header>
        <p>{{value.content}}</p>
        <footer class="cell-footer">
            <span>{{new Date(value.create_at).toLocaleString()}}</span>
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
      }
    }
  }
</script>
<style lang="less" scoped>
  

</style>
