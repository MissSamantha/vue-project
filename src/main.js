// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//导入vue
import App from './App'//导入App主组件（App.vue）
import router from './router'//导入路由
//外部库或框架
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
//引入css
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/app.css'
import 'normalize.css'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
