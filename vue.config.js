module.exports = {
	// 配置打包路径
	runtimeCompiler: true,
	publicPath: './', // 设置打包文件相对路径
	outputDir: 'dist',
	/*
	访问文件别名配置
	*/
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'services': '@/services',
        'views': '@/views',
      }
    }
  }
}
