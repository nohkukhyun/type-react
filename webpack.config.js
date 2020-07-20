const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //웹팩이 빌드할 파일
  entry: ["@babel/polyfill", "./src/index.tsx"],

  //빌드시 어떤이름으로 만들지
  output: {
    path: path.resolve(__dirname + "/build"),
    filename: "bundle.js",
  },
  //개발용인지 실제서비스용인지
  mode: "development",

  //빠른 실시간 리로드 기능을 갖춘 개발서버
  devServer: {
    contentBase: "./dist",
    port: 8080,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$./,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin, "style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
