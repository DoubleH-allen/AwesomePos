# awesomepos

> vue+vuex+vueroot

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# element的引入使用
npm install element-ui --save
# vuex 的使用
npm install vuex --save
# vuex dispatch 的两种方式
1. 	import {mapState} from 'vuex'
	this.$store.dispatch('funcNameAction')
2.  import {mapActions} from 'vuex'
	mapActions(['funcNameAction'])
# 添加了两种vue全局方法的调用
1. prototype 添加方法
2. vue.use('file')
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# AwesomePos
