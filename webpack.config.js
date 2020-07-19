const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],

  output: {
    path: path.resolve(__dirname + "build"),
    filename: "bundle.js",
  },
  mode: "development",

  devServer: {
    contentBase: "./dist",
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public.index.html",
      filename: "index.html",
    }),
  ],
};
