const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const extractPlugin = new ExtractTextPlugin ({
  filename:'main.css'
})

module.exports = {
  entry: "./src/app.js",
  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath:"/dist"
  },
  watch: true,
  devServer: {
    inline: true,
  },
  
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use:['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: "file-loader",
        options: {
          name:'[name].[ext]',
          outputPath:'assets/',
          publicPath:'assets/'
        },
      },
    ]
      //Add sass-loader
      
    },
    plugins: [
      extractPlugin,
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }