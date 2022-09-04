# webpack

## inspect

- 查看所有规则
  ```bash
  // 导出 webpack 配置信息(导入到项目目录中)，webpack.config.js 可修改成自定义文件名
  vue inspect > webpack.config.js

  // 输出 指定环境 的配置信息 mode：production、test、development
  vue inspect --mode <mode>

  // 查看所有已配置规则名称列表
  vue inspect --rules
  输出为：
  [
      'vue',
      'images',
      'svg',
      'media',
      'fonts',
      'pug',
      'css',
      'postcss',
      'scss',
      'sass',
      'less',
      'stylus',
      'js'
  ]

  // 查看指定规则 ruleName： 上述数组选项
  vue inspect --rule <ruleName>

  // 查看所有已配置插件列表
  vue inspect --plugins

  // 查看指定插件配置
  vue inspect --plugin <pluginName>

  // 显示完整webpack配置
  vue inspect -v
  vue inspect --verbose

  // 显示帮助信息
  vue inspect -h
  vue inspect --help
  ```

## svg loader 配置
- webpack配置
- 文件引入,组件声明
- 很有可能存在 版本的兼容问题, 这样的问题,真实让人有点头大