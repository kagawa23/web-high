const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const { WebPlugin } = require('web-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
        filename: "[name].[chunkhash].js" // 打包后输出文件的文件名
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:ExtractTextPlugin.extract({
                    use: ['css-loader'] // 压缩 CSS 代码
                  }),
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'test.html'
          }),
          new ExtractTextPlugin({
            filename: `[name].[chunkhash].css`,// 给输出的 CSS 文件名称加上 Hash 值
          }),
          new ServiceWorkerWebpackPlugin({
            // 自定义的 sw.js 文件所在路径
            // ServiceWorkerWebpackPlugin 会把文件列表注入到生成的 sw.js 中
            entry: path.join(__dirname, 'sw.js'),
          }),
    ],
    devServer: {
        // Service Workers 依赖 HTTPS，使用 DevServer 提供的 HTTPS 功能。
        https: true,
      }
}