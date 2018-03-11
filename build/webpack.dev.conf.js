'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const express = require('express')

const app = express()

 var appData = require('../data.json')//加载本地数据文件
 var recommendation = appData.recommendation//获取对应的本地数据
 var movie_type = appData.movie_type
 var shuffle_movie = appData.shuffle_movie
 var swiper_movie = appData.swiper_movie
 var swiper_movie_text = appData.swiper_movie_text
 var MenuTabMovs = appData.MenuTabMovs
 var movie_items = appData.movie_items
 var movie_detail = appData.movie_detail
 var apiRoutes = express.Router()
app.use('/api', apiRoutes)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/recommendation', (req, res) => {
        res.json({
          errno: 0,
          data: recommendation
        })//接口返回json数据
      }),
      app.get('/api/movie_type',(req,res)=>{
        res.json({
          errno: 0,
          data: movie_type
        })
      }),
      app.get('/api/shuffle_movie',(req,res)=>{
        res.json({
          errno: 0,
          data: shuffle_movie
        })
      }),
      app.get('/api/swiper_movie',(req,res)=>{
        res.json({
          errno: 0,
          data: swiper_movie
        })
      }),
      app.get('/api/swiper_movie_text',(req,res)=>{
        res.json({
          errno: 0,
          data: swiper_movie_text
        })
      }),
      app.get('/api/MenuTabMovs/act',(req,res)=>{
        res.json({
          errno: 0,
          data: MenuTabMovs
        })
      }),
      app.get('/api/MenuTabMovs/comedy',(req,res)=>{
        res.json({
          errno: 0,
          data: MenuTabMovs
        })
      }),
      app.get('/api/MenuTabMovs/terror',(req,res)=>{
        res.json({
          errno: 0,
          data: MenuTabMovs
        })
      }),
      app.get('/api/movie_items/:name',(req,res)=>{
        res.json({
          errno:0,
          data:movie_items
        })
      }),
      app.get('/api/movie_detail/:id',(req,res)=>{
        res.json({
          errno:0,
          data:movie_detail
        })
      })

    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
