// path를 가져오는 전역변수 만들기
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin');
const CopyPugin = require('copy-webpack-plugin');




// 구성옵션을 제공해야한다.
// 프로젝트를 세세하게 다룰 수 있다.
// 규모가 있는 프로젝트에서 유용하다.

module.exports = {
  // js를 진입점으로 한다.
  // 어디서 부터 파일을 읽을지 정한다.
  // 필수로 지점을 선택해줘야한다.
  entry: './js/main.js',

  // 결과 아웃풋의 구성
  output: {
    // 절대경로를 설정해줘야 한다.
    // 절대경로와 dist 합치기

    // path: path.resolve(__dirname, 'dist'),  기본으로 dist 폴더에 생성을 해준다.
    // filename: 'main.js',
    // 구성옵션의 변경사항의 과거 파일을 삭제해준다.
    clean: true
  },


  module: {
    rules: [
      {
        test: /\.s?css$/,
        user: [
          // 하위에서 상위로 올라오는 순서이다.
          'style-loader', //html 태그부분에 style을 삽입해주는 플러그인
          'css-loader', // 먼저해석한다. main.js의 css파일을 해석하는 용도
          'postcass-loader',
          //sass plugin
          'sass-loader'
        ]
      },
      {
        // babel 설정
        test: /.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // entry 시점의 plugin을 참조하여 만든다.
  // 번들링 후 결과물의 처리 방법을 지정하는 plugin을 설정한다.
  plugins: [
    new HtmlPlugin({ template: './index.html' }),
    // 이미지 resource 파일을 static 폴더에서 dist파일 옮길때 사용하는 옵션
    // 이미지의 상대 경로를 작성해서  웹에서 이미지를 사용 할 수 있도록 도와준다.
    new CopyPugin({
      patterns: [{
        from: 'static'
      }]
    })
  ],
}
