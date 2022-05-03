# Webpack Basic

### Webpack 설치

**설치**

- parcel bundler와 다른 점은 dev 서버와 명령어 package가 다 다르기 때문에 3가지 설치를 해야 한다.

```bash
$npm init -y

$npm i -D webpack webpack-cli webpack-dev-server@next
```

**개발 및 빌드 설정**

```json
"scripts": {
    "dev":"webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
```

**구성파일 만들기**

_webpack.config.js_

- 구성옵션을 제공해야한다.
- 프로젝트를 세세하게 다룰 수 있다.
- 규모가 있는 프로젝트에서 유용하다.
- node.js환경에서 사용된다.

---

### entry, output

- entry : webPack 실행 시 진입 지점의 파일을 선택한다.
- output: 빌드했을 때, 경로와 설정 output 파일을 설정해준다.
  - clean : 과거의 생성 파일을 지워주는 옵션

```js
// path를 가져오는 전역변수 만들기
const path = require("path");

// 구성옵션을 제공해야한다.
// 프로젝트를 세세하게 다룰 수 있다.
// 규모가 있는 프로젝트에서 유용하다.

module.exports = {
  // js를 진입점으로 한다.
  // 어디서 부터 파일을 읽을지 정한다.
  // 필수로 지점을 선택해줘야한다.
  entry: "./js/main.js",

  // 결과 아웃풋의 구성
  output: {
    // 절대경로를 설정해줘야 한다.
    // 절대경로와 dist 합치기

    // path: path.resolve(__dirname, 'dist'),  기본으로 dist 폴더에 생성을 해준다.
    // filename: 'main.js',
    // 구성옵션의 변경사항의 과거 파일을 삭제해준다.
    clean: true,
  },
};
```

### Plugin

- 개발서버를 만들기 위한 plugin 설치하기

```bash
$ npm i -D html-webpack-plugin
```

- js를 통한 css파일을 읽기위한 plugin 설치하기

```bash
$ npm i -D  css-loader style-loader
```

- SASS 플러그인 설치

```bash
$ npm i -D sass-loader sass
```

- autoPrefixer 만들기

  ```bash
  $ npm i -D postcss autoprefixer postcss-loader
  ```

  - .postcssrc.js 파일 만들기
  - js파일에 플러그인 설정하기

    ```js
    // .postcssrc.js
    module.exports = {
    plugins: [
      require('autoprefixer')
    ]
    ```

  - html -> css 소스 삭제하기

- babel plugin 설치하기

```bash
$ npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

---

### NPX, DIGIT

- 간편하게, 기존의 프로젝트를 가져와서
- 처음부터 버전관리를 할 수있다.
- 버전관리가 되지 않는 프로젝트를 관리하기 위해서 사용한다.

```bash
$ npx degit githubURL Folder
```
