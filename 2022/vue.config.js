module.exports = {
  // 这个也不用我多说的一个东西，这个东西就是一个我配置文件的在生产环境和开发环境的重要配置
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cart/'
    : '/',
  devServer: {
    // 注意了这个app就是一个express的实例对象，这样我就可以自己不用多启动一个服务器就可以使用我自己的接口了
    // before (app) {
    //   app.get('/api/course', (req, res) => {
    //     setTimeout(() => {
    //       res.json([{ name: 'xjh', age: 2, sex: '男', pirce: '12' }, { name: 'xjh2', age: 12, sex: '女', pirce: '120' }])
    //     }, 1000)
    //   })
    // },
    port: 8081,
    open: true,
  },
  chainWebpack: config => {
    // 通过这个方式,就可以解析 vue 模板的 img 
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          SubChildren: 'img-url',
        }
        return options;
      });

    // svg 模块的配置, 排除 icons 文件
    config.module.rule('svg')
      .exclude.add(resolve('./src/icons'))

    // 添加新的规则 icons
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  },
  // 传统的配置使用
  configureWebpack: {
    name: 'title'
  },
  // 链式的配置使用方式给
  chainWebpack(config) {

  }
}
