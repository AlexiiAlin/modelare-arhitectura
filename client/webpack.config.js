import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|eot|woff|woff2)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000"
    })
  }
};
