const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  //웹팩이 빌드할 파일
  entry: ['@babel/polyfill', './src/index.tsx'],

  //빌드시 어떤이름으로 만들지
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js',
  },
  //웹팩 빌드 옵션
  /**
   * options: "development", "production"
   * development는 빠르게 빌드하기 위해 / Production 빌드시 최적화
   */
  mode: 'development',

  //빠른 실시간 리로드 기능을 갖춘 개발서버
  devServer: {
    //devServer에 제공되어야할 컨텐츠 파일(번들 결과 파일)
    contentBase: __dirname + '/build',
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },

  //사용하는 코드의 로더를 설정
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$./,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin,
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    //html파일을 해석
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      hash: true,
    }),
    //css파일 최소화
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    //build시 사용하지 않는 웹팩 제거
    new CleanWebpackPlugin(),
  ],
}
