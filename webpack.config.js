const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [ "./src/app.js",
          "./src/scss/app.scss"
  ],
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "bundle.js",
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
          publicPath: './src/assets',
        },
      },
      //Add sass-loader
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "postcss-loader",
            options: {
			  plugins:
			  
			  function () {
                return [require("autoprefixer")];
              },
            },
          },
        ],
      },
    ],
  },
};
