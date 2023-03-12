const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV_SERVER_PORT = 3000;

module.exports = {
  mode: "none",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
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
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],

  devServer: {
    host: "localhost",
    port: DEV_SERVER_PORT,
    open: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
