const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [ "./src/app.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath:"/dist"
  },
  watch: true,
  devServer: {
    inline: true,
  },
  module: {
    rules: [
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
      //Add sass-loader
      {        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          },
    ],
  },
]
}}
