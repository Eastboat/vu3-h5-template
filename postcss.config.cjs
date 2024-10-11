/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    }),
    require('cnjm-postcss-px-to-viewport')({
      viewportWidth: 750, // 根据设计稿设定
      minPixelValue: 1, // 最小的转换数值
      unitPrecision: 4, // 转化精度，转换后保留位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      include: [],
      exclude: [], // 设置忽略文件，用正则做目录名匹配
      // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
      customFun: ({ file }) => {
        const judgeComponent = (file) => /vant/.test(file)
        const designWidth = judgeComponent(file) ? 375 : 750
        return designWidth
      }
    })
    // 视口处理,限制pc max-width效果
    // require('postcss-mobile-forever')({
    //   appSelector: '#app',
    //   viewportWidth: 750,
    //   maxDisplayWidth: 750,
    //   rootContainingBlockSelectorList: ['van-tabbar', 'van-popup']
    // })
  ]
}
