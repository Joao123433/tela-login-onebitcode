const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  entry: {
    main: "./src-entry/App.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist-views/")
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\js$/, use: ["babel-loader"] }
    ]
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.resolve(__dirname )
    }
  }
}
