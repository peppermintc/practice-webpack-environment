## 목차

1. [웹팩 설정 파일](#웹팩-설정-파일)
2. [Entry](#Entry)
3. [Output](#Output)

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

## Entry

Entry는 Webpack 번들링을 할 때 진입점이 되는 자바스크립트 파일입니다. Entry point는 하나가 될 수도 있고 멀티페이지인 경우 여러개가 될 수도 있습니다. 단 HTML 하나당 하나의 엔트리를 사용해야한다는 규칙이 있습니다.

## Output

Output은 번들링 결과물을 의미하고 파일명과 저장되는 경로를 설정 파일에서 설정 할 수 있습니다.

## Loader

Loader는 번들링 과정에서 자바스크립 이외의 파일들(html, css, 이미지 폰트 등)을 해석하고 처리 할 수 있게 도와주는 속성입니다.
CSS 이외에도 TS, Babel, Sass 등의 로더들이 있는데 파일 확장자에 따라 로더를 적용 할 수 있고 자주 사용되는 로더들을 알아두면 도움이 될 것 같습니다.
로더는 체이닝시켜 순차적으로 적용되게 할 수 있고 use에 배열로 로더를 명시하면 마지막 순서 로더부터 스택에서 팝되는 순서대로 적용됩니다.

https://webpack.js.org/concepts/loaders/#loader-features

## Plugin

웹팩 동작에 추가적인 기능을 제공합니다. loader가 번들링 과정에서 처리를 도와주었다면 plugin은 번들링 결과물을 처리하고 변경시킵니다. 다음과 같은 플러그인들을 예시로 들 수 있습니다.

- HtmlWebpackPlugin : 빌드 결과물을 script 태그 로드하도록 자동으로 html 파일을 만들고 script 태그를 추가해줍니다.
- ProgressPlugin : 빌드 진행 상황을 터미널에 출력해줍니다.
