## 목차

1. [웹팩 설정 파일](#웹팩-설정-파일)

---

## 웹팩 설정 파일

```javascript
// webpack.config.js (웹팩 docs의 코드 예시가 CommonJS로 되어있다.)
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

- `__dirname`은 현재 실행되고있는 모듈 폴더 경로를 string 값으로 가지고 있는 변수입니다.

  https://nodejs.org/dist/latest-v18.x/docs/api/modules.html#__dirname

- `path.resolve()`는 인자로 전달받은 경로들을 합쳐 하나의 절대경로로 리턴하는 함수입니다.

  https://nodejs.org/dist/latest-v18.x/docs/api/path.html#pathresolvepaths

- `mode`에는 `development`, `production`, `none`이 있습니다. 모드에 따라 빌드시 최적화 방식이 다르고 환경설정을 다르게 적용할 수 있습니다.

  https://webpack.js.org/configuration/mode

- webpack-cli를 이용하면 웹팩 설정을 쉽게할 수 있습니다.

  https://github.com/webpack/webpack-cli/tree/master/packages/webpack-cli
