/*
	1、使用路由懒加载引入路由
	2、导出路由
	3、在router.js引入，进行路由状态管理
*/
 
 /*
	路由懒加载
 */
 const table = ()=> import('./table.vue');
 
 /*
    导出路由
 */
 export default {
	 path: '/table',
	 name: 'table',
	 component: table,
	 children:[
		 
	 ]
 }