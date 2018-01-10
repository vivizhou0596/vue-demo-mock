# vue-demo-mock

> A Vue.js project

## Build Setup

``` bash
# 安装依赖
npm install

# 启动热加载服务 localhost:8080
npm run dev

# 打包压缩到生产环境
npm run build

# 构建产品并查看包分析器报告
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 文件目录

├─build				webpack打包配置文件夹
├─config
├─dist				打包输出文件夹
├─node_modules 		相关依赖
├─src           	项目源码
│  │  App.vue
│  │  main.js
│  │
├  │──api			 控制API信息交换的中间函数
│  │    api.js
│  │
├  │──assets		 静态资源
│  │    logo.png
│  │
├  │──components
│  │    HelloWorld.vue
│  │
├  │──mock			mock 模拟服务器
│     │  index.js
│     │  mock.js
│     │
│     └─data
│          user.js
│
└─router			路由信息
│        index.js
└─static			外部静态资源
│
└─package.json      依赖配置信息

###项目搭建思路

以`src/main.js`为入口，引入elementUI以及相关组件、通用样式，渲染`src/App.vue`。

### mock模拟说明
1、使用axios发送请求，所有的请求都放置再`src/api`中
2、使用axios-mock-adapter拦截请求，模拟服务器响应`src/mock/mock.js`。注意拦截需要在main.js中进行初始化调用
3、使用mock.js生成仿真的后台数据`src/mock/data/user.js`


### 相关链接
axios   github地址：https://github.com/axios/axios
axios-mock-adapter npm包管理地址：https://www.npmjs.com/package/axios-mock-adapter
mockjs 官网上查阅示例：http://mockjs.com/examples.html
