const { defineConfig } = require('@vue/cli-service')
//import MiniCssExtractPlugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      //MiniCssExtractPlugin
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      
    ]

  },
})
