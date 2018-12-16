const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    port: 3000,             // 端口
    open: true,             // 自动打开浏览器
    hot: true,               // 开启热更新
    overlay: true, // 浏览器页面上显示错误
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
})