<template>
  <div style="padding: 20px 0">
    <div class="title-head">
      <el-input class="head-input" v-model="title" placeholder="请输入标题"></el-input>
      <div>
        <span>标签</span>
        <div class="tag-item">
          <div v-for="(obj, index) of tags">
              <el-input class="el-right" v-model="tags[index]" placeholder="请输入标签"></el-input>
          </div>
          <div>
            <button class="tag-btn" v-show="tags.length > 0" @click="subtractTag">-</button>
            <button class="tag-btn" @click="addTag">+</button>
          </div>
        </div>
      </div>
      <el-button class="head-btn" @click.native="send">发送</el-button>
    </div>
    <div class="content">
      <mavon-editor :toolbars="toolbarConfig" v-model="content" />
    </div>
  </div>
</template>

<script>
let toolbarConfig = {
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: false, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: false, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: true, // 单双栏模式
  preview: true, // 预览
}

import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'ArticleAdd',
  data() {
    return {
      toolbarConfig: toolbarConfig,
      title: '',
      content: '',
      tags:[]
    }
  },
  methods: {
    ...mapActions([
      'addArticle',
      'goto'
    ]),
    send() {
      this.addArticle({
        title: 'this is title',
        content: this.content,
        tags: ['tag1', 'tag2'],
        onsuccess: body => console.log(body)
      })
    },
    subtractTag() {
      if (this.tags.length <= 0) return;
      this.tags.pop()
    },
    addTag() {
      //最多只能3个标签
      if (this.tags.length > 3) return;
      this.tags.push('')
    }
  }
}
</script>
<style lang="less" scoped>
.title-head {
  display: flex;
  flex-direction: column;
}

.content {
  padding-top: 20px;
}

.head-input {
  padding-right: 20px;
}

.head-btn {
  width: 300px;
}

.tag-item {
  display: flex;
  flex-direction: column;
}

.tag-btn {
  width: 20px;
  height: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
}

.tag-btn:nth-child(1) {
  border-color: red;
  background-color: red;
}

.tag-btn:nth-child(2) {
  border-color: green;
  background-color: green;
}

</style>
