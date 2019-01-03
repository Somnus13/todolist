const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分 css 样式
// const ExtractTextWebpackPlugin  = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 多页面配置
  entry: {
    index: './src/index.js', // 入口文件
    // admin: './src/admin.js'
  },
  output: {
    filename: '[name].js', // 打包后文件名称
    path: path.resolve('dist'), // 打包后目录，绝对路径
  },
  module: {
    rules: [
      // {
      //   test: /\.(sc|sa|c)ss$/,
      //   use: ExtractTextWebpackPlugin.extract({
      //     // css link 方式引入就不需要 style-loader
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           modules: true,
      //           importLoaders: 1,
      //           localIdentName: '[name]_[local]_[hash:base64]',
      //           sourceMap: true
      //         }
      //       },
      //       {
      //         loader: 'postcss-loader'
      //       },
      //       {
      //         loader: 'sass-loader'
      //       }
      //     ] //右向左解析
      //   })
      // },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '8192', // 小于8k自动转成base64，不会存在实体图片
              outputPath: 'images', // 打包存放目录
            },
          },
        ],
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader',
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: { // 抽离第三方插件
          test: /node_modules/, // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor', // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10,
        },
        utils: {
          // 抽离自己写的公共代码，utils里面是一个公共类库
          test: /src\/utils/,
          chunks: 'initial',
          name: 'utils', //  任意命名
          minSize: 0, // 只要超出0字节就生成一个新包
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // html模板
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      hash: true, // 打包文件追加 hash 串
      chunks: ['vendor', 'index', 'utils'], // 引入需要的chunk
    }),
    // new HtmlWebpackPlugin({
    //   // html模板
    //   template: './src/admin.html',
    //   filename: 'admin.html',
    //   chunks: ['admin'],
    //   hash: true, // 打包文件追加 hash 串
    // }),
    // 拆分后会把css文件防到dist目录下的css文件
    // new ExtractTextWebpackPlugin('css/style.css'),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    }),
  ],
};
