/*
访问文件别名配置
*/
module.exports = {
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
