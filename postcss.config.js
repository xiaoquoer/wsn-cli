// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
    "plugins": {
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-px-to-viewport": {
            viewportWidth: 1920, // 视窗的宽度，对应的是我们设计稿的宽度.
            viewportHeight: 1080, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
            unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            //   selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类.
            minPixelValue: 0, // 小于或等于`1px`不转换为视窗单位.
            mediaQuery: true // 允许在媒体查询中转换`px`
        },

    }
}