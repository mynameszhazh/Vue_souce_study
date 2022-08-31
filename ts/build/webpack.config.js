const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // 入口文件
  entry: './src/index.ts',
  // 输出
  output: {
    // 文件名
    filename: 'app.js'
  },
  // 需要解决的文件
  resolve: {
    extensions:['.js', '.ts', '.tsx'] 
  },
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',
  // 配置我的 loader 模块 等等
  module: {
    rules: [
      {
        // 规则
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader'
        }],
        // 排除的文件夹
        exclude: /node_modules/
      }
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}