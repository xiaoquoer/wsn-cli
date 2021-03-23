import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*
完整引入Element
*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/*
浏览器兼容事件(警告)
*/
import 'default-passive-events'

/*
全局引入echarts
*/
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
/*
echarts字体自适应js
*/
import fontSize from './assets/js/echarts_font.js';
Vue.prototype.fontSize = fontSize;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
