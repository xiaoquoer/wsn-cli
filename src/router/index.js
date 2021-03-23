import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
动态加载views中的所有文件
require.context() 获取一个特定的上下文，实现自动化导入模块，不需要每次显式的调用import导入模块
require.context(directory {String},useSubdirectories {Boolean},regExp {RegExp}) 
require.context函数接受三个参数
1、directory {String} -读取文件的路径
2、useSubdirectories {Boolean} -是否遍历文件的子目录
3、regExp {RegExp} -匹配文件的正则
*/
const files = require.context('@/views', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/views' + key.replace('.', ''));
  return page.default;
})

/*
解决路由跳转刷新异常问题 push 和replace
*/
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
	return VueRouterPush.call(this,to).catch(err => err)
}

const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
	return VueRouterReplace.call(this,to).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
路由懒加载  Loading chunk * failed 报错问题 
*/
router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    if (isChunkLoadFailed) {
        // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，
        //用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而解决该问题
        location.reload();
    }
});

export default router
