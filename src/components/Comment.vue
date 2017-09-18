<template>
    <div class="cell">
        <header @click="header">
            <img src="https://placekitten.com/28/28" />
            <span>隔壁老王</span>
        </header>
        <p>{{value.content}}</p>
        <footer class="cell-footer">
            <span>{{value.update_at}}</span>
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
