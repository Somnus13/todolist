const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpckPlugin = require('clean-webpack-plugin') // 清理dist
const glob = require('glob')
const PurifyCSSPlugin  = require('purifycss-webpack')


module.exports = merge(common, {
  plugins: [
    new CleanWebpckPlugin('dist'),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html'))
    }),

  ],
  mode: 'production'
})