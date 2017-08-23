<template>
  <div>
    <!-- <button @click="uploadimg">upload</button> -->
    <mavon-editor @imgAdd.native="imgAdd"
                  @imgDel.native="imgDel" 
                  :ishljs = "true" 
                  v-model="msg" 
                  :editable="false" 
                  default_open="preview"
                  ></mavon-editor>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
  export default {
    name: 'Home',
    data () {
      return {
        img_file: {},
        msg: `
## 个人信息
 - 王旭 / 男 / 1993
 - 无锡太湖学院 / 计算机科学与技术
 - Github: https://github.com/wayshon 
 - Blog: https://wayshon.com
 - 手机: 15716199911
 - Email: wayshongg@gmail.com

## 技能清单

- **JavaScript**
	- ES5 / ES6 / ES7
	- vue / vuex / vue-router / axios
	- nodejs / express / koa2
	- React-Native / mobx / Cordova
- **iOS**
	- 常用SDK及api
	- json/xml处理
	- kvo，代理，单例
	- GCD多线程
- **数据库**
	- 常用sql语句
	- mysql / sqlite 使用及优化
	- 了解mongodb及redis使用
- **网络**: 熟悉socket通信, mqtt协议，http / https
- **其他**: git / npm / webpack / shell / linux / cocoapods

## 项目经验

#### **复创自助信息技术有限公司(2017.5.15 ~ 至今)**
###### 前端工程师

- **魔镜 app(iOS && react-native)**: \`react-native\`\`mobx\`\`socket.io\`
	- 架构设计: 分离功能模块与业务模块，解耦功能模块，通过业务模块串联功能模块。
	- 组件封装: 将腾讯优图的人脸识别SDK封装成\`react-native\`的原生组件，暴露原生与RN通信的方法与事件。
	- 通信封装: 封装socket.io来实现\`mqtt协议\`，实现App与微信小程序，底座硬件和服务器间的通信。
- **总控管理平台(Vue2.0)**:\`Vue\`\`Vuex\`\`Vue-router\`
	- 梳理接口文档。
	- 组件封装，完善功能型可复用组件。
	- 设计路由树和应用的状态树。
	- 优化代码结构，语义化代码。
	- 使用mockjs调试。

#### **上海瑞眼科技有限公司(2015.10.15 ~ 2017.2.25)**
###### 前端

- **瑞眼云app(Cordova + Vue2.0)**:\`Cordova\`\`CodePush\`\`Vue2.0\`\`Mint-UI\`
	- Cordova使用可行性调研与开发。
	- CodePush，推送，分享等等涉及原生的插件的调研及使用。
	- 封装钉钉分享iOS SDK封装成Cordova插件供js调用。
	- 使用Vue实现业务编码。
- **消防一级平台web(Vue1.0)**:\`Vue1.0\`\`AmCharts\`\`Amap\`
	- 编写私有组件库everUI及文档: https://github.com/everui/everui, https://everui.gitbooks.io/everui/content
	- 使用AmCharts，高德地图等第三方库实现数据可视化。

###### iOS 

- **物联网移动终端(iOS)**:\`xml/json\`\`sqlite\`\`bluetooth\`
	- 解析XML，提取数据存sqlite。
	- 处理数据，筛选数据通过蓝牙传硬件设备。
	- 处理获取蓝牙硬件采集的数据，将数据组装成XML发送送服务器。

- **控制器(iOS)**:\`UDP\`\`GCD\`
	- 制定通讯协议。
	- 封装通讯模块，实现单例模式处理UDP的发送与接收功能。
	- 使用GCD多线程以及线程锁机制控制发送UDP包。
	- 通过代理模式处理接收的包。

## 其他
- 基于 Aliyun EC 搭建一个实验性质的工作作站。
- 部署docker, gitlab-ci。
- 首页博客\`https://wayshon.com\`通过koa2 + mysql实现，提供了reatful和graphql两套接口。
- 前端采用vue实现。
- 接口设计遵循微服务设计理念，eureka实现服务注册与服务负载均衡。


## 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事。`
      }
    },
    methods: {
      ...mapActions([
        'goto'
      ]),
      imgAdd(pos, $file){
        this.img_file[pos] = $file;
      },
      imgDel(pos){
        delete this.img_file[pos];
      },
      uploadimg(){
        console.log(this.img_file);
        var formdata = new FormData();
        for(var _img in this.img_file){
            formdata.append(_img, this.img_file[_img]);
        }
            // axios({
            //     url: 'http://127.0.0.1/index.php',
            //     method: 'post',
            //     data: formdata,
            //     headers: { 'Content-Type': 'multipart/form-data' },
            // }).then((res) => {
            //     console.log(res);
            // })
      },
    },
    mounted() {
      
    }
  }
</script>
