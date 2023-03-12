const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      // JSX 문법 호환
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    // 브라우저 환경에서 process 객체를 사용, 없으면 오류
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),

    // HTML 파일 처리
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],

  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
  },

  resolve: {
    // 다음 확장자 파일들을 모듈로 인식하도록 설정
    extensions: [".js", ".jsx"],
  },
};
