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

export default {
  name: 'ArticleDeatil',
  data() {
    return {
      msg: `
### 概览
- Cordova

    Cordova 能够将你的 HTML/JS 代码打包在一个原生的容器中运行，并且可以调用系统的各类软硬件接口（JavaScript API）。我们将这种架构称之为 \`hybrid app\` , 得益于这种架构，我们能将前端代码跨平台运行，并且得到接近原生应用的系统特性。最终发布到各大应用市场，包括苹果的 App Store。
- Cordova 插件

    Cordova 通过插件的生态系统为开发者提供了广泛的软硬件接口支持，诸如文件读写、推送通知、解压缩、通讯录等等。这种方式保证了在开发过程中按需引入相应的功能插件，同时也加快了插件的更新维护，减少代码冗余。Cordova 插件使用 CLI 的方式经过 NPM 管理依赖并安装，十分方便。
- Cross-walk Project

    Cross-walk 是英特尔开发的一款为HTML应用提供运行时环境的开源项目，它基于最新的 Chromium 核心开发，可以提供最新的 Web 特性和一致的兼容性。随着 Cordova Android 4.0.0+ 引入了对嵌入式 webview 的支持，现在你可以方便地在你的 Cordova 应用上使用 Crosswalk 的 webview。通过使用 Crosswalk 的 webview 插件，开发者可以享用远程调试的功能，前沿的 HTML5 特性，例如WebGL, WebAudio 和 WebRTC，以及在包括 Android 4.0 Ice Cream Sandwich(ICS) 在内的 Android 设备上性能的显著提升。
- Vue.js

    Vue.js 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue 生态系统支持的库开发的复杂单页应用。基于 Vue 框架，开发单页面的 hybrid app 将会变的非常高效。
- CodePush

    CodePush 是微软提供的一项云服务，它为开发者提供了直接向用户推送热更新 (Hot-Code-Update) 的软件支持和 CDN 分发网络。CodePush 为 Cordova 开发者提供了插件，我们可以快速地植入应用中。它提供的特性包括：版本管理、灰度更新、紧急回滚、增量更新 (Diff) 等等。它的 CDN 是世界上最大的 CDN 服务商 Akamai 提供的，稳定性和速度可想而知。*未来可能收费*

### 初始化开发环境
1. **Nodejs 版本更新** 使用 \`node -v && npm -v\` 检查版本，如果低于 v6.0.0 和 v3.0.0，请使用 \`n\` 工具更新：\`sudo npm install n -g && n stable\`
`
    }
  },
  computed: {
    content() {
      return marked(this.msg)
    }
  }
}
</script>
