## Webpack 환경 연습

1. [Webpack + React 환경 구축](#1-webpack--react-환경-구축)
2. [Typescript 사용 설정]()
3. [CSS, Styled Components 설정]()
4. [eslint & prettier 설정]()s
5. [Storybook 추가]()
6. [Deploy + CI/CD]()
7. [dev, prod env 환경 분리]()
8. [Module Federation 환경 구축]()

---

## 1. Webpack + React 환경 구축

### html-webpack-plugin

웹팩 번들링 후 HTML 파일을 자동으로 만들어주고 번들링 결과 파일을 로드하는 script 태그를 자동적으로 추가해줍니다.

```javascript
// webpack.config.js
const webpack = require("webpack");

module.exports = {
  // ...
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  // ...
};
```

- 종류: Plugin
- devDependencies: html-webpack-plugin
- https://webpack.js.org/plugins/html-webpack-plugin/
- https://github.com/jantimon/html-webpack-plugin

### babel-loader

babel-loader는 React JSX 문법 사용시 이를 컴파일러가 해석할 수 있는 ES 자바스크립트로 트랜스파일링해주는 역할을 합니다.

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  // ...
};
```

- 종류: Loader
- devDependencies: babel-loader, @babel/core, @babel/preset-env, @babel/preset-react
- https://webpack.js.org/loaders/babel-loader/

### .jsx 파일 확장자 지원

검색하여 로드할 파일 확장자 .jsx를 추가

```javascript
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // ...
};
```

- 종류: Configuration
- https://webpack.js.org/configuration/resolve/#resolveextensions

### webpack.ProvidePlugin > process/browser 모듈 추가

Webpack 5에서는 polyfill이 지원되지 않기 때문에 webpack.ProvidePlugin 플러그인으로 process/browser 모듈을 직접 추가해주어야 합니다.

```javascript
// webpack.config.js
const webpack = require("webpack");

module.exports = {
  // ...
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  // ...
};
```

- 종류: Plugin
- devDependencies: process
- https://webpack.js.org/migrate/5/#run-a-single-build-and-follow-advice

### webpack-dev-server

로컬 포트에 개발 웹 서버를 구동시켜줍니다.

```javascript
// webpack.config.js
module.exports = {
  // ...
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  // ...
};
```

- 종류: Plugin
- devDependencies: webpack-dev-server
- https://webpack.js.org/configuration/dev-server/
- https://github.com/webpack/webpack-dev-server

---
