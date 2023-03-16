<div align="center">
  <a href="https://github.com/peppermintc/webpack-environment">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <br>
  <br>
  <br>

<h1>My Webpack Environment Template</h1>

<p>
    Webpack 5 + React + TypeScript + CSS 등으로 이루어진 템플릿 만들어보기
  </p>
</div>

## Table of Contents

1. [Webpack 5 + React 18](#1-webpack-5--react-18)
2. [Typescript 사용 설정](#2-Typescript-사용-설정)
3. [CSS & Styled Components 설정](#3-css--styled-components-설정)
4. eslint & prettier 설정
5. Storybook 추가
6. Deploy + CI/CD
7. dev, prod env 환경 분리
8. Module Federation 환경 구축

---

## 1. Webpack 5 + React 18

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

## 2. Typescript 사용 설정

### Typescript 의존성 추가 & 로더 추가

Typescript 의존성과 함께 ts-loader를 추가해줍니다.

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  // ...
};
```

- 종류: Loader
- devDependencies: ts-loader
- https://webpack.kr/guides/typescript/

---

## 3. CSS & Styled Components 설정

CSS 파일을 불러와 스타일을 적용시키려면 두가지 의존성을 추가해야합니다.

- `css-loader`는 .css 파일을 로드하여 자바스크립트 모듈로 변환시킵니다.
- `style-loader`는 자바스크립트 모듈로 변환된 CSS를 style 태그로 HTML 페이지에 동적으로 추가해줍니다.

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader는 배열 뒤에서 부터 적용됩니다 (css-loader > style-loader 순서를 지켜야합니다)
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  // ...
};
```

- 종류: Loader
- devDependencies: css-loader, style-loader
- https://webpack.kr/concepts/loaders/#configuration
