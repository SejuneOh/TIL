# Html 무작정 배워보자 !!!!

- index.html ?  
  index.html 파일은 browser가 root 파일 경로에서 제일 먼저 찾을려고 하는 파일이다.

- <DOCTYPE! html> vs <DOCTYPE! html PUBLIC ....>  
  위의 차이는 현재 html 버전의 차이를 말해준다. 브라우저가 읽어야 할 html 버전을 정의한 내용인데  
  전자는 html5를 표시하며, 후자는 xhtml 버전을 표시한다.

- html tag

```html
<!-- html의 시작과 끝을 알려준다-->
<html></html>
```

- head

```html
<!-- html의 필요한 메타데이터, 링크, 제목, 범위 설명을 설정한다-->
<head></head>
```

- body

```html
<!-- 사용자 화면에 표시를 해주는 부분이다. -->
<body></body>
```

- js, css 파일을 html에 연결해보자

```html
<head>
  <!--정의한 css,js 파일을 html에 연결하여 사용한다.-->
  <link rel="stylesheet" href="./main.css" />
  <script src="./main.js"></script>
</head>
```

- html 언어 설정

```html
<html lang="ko">
  <head>
    <!--인코딩 설정 !!-->
    <meta charset="UTF-8" />
  </head>
</html>
```

---

## Tag에 대해서 알아보자

```html
<title>html의 제목을 정의한다.<title>
```

```html
<!--html에서 직접 선언 할 수 있다.-->
<head>
  <style>
    div {
      color: red;
      border: 1px soid;
    }
  </style>
</head>
```

```html
<head>
  <!--rel: stylesheet, icon-->
  <link rel="가져오는관계" href="경로" />
</head>
```

```html
<!--html 안에서 스크립트를 실행 할 수 있다.-->
<head>
  <script>
    function Method1() {
      // do it!!
    }
  </script>
</head>
```

```html
<!-- 표현 할 수 없는 정보 엔진 키워드를 정리하고 설정한다.-->
<!--
name : 정보의 종류(author, viewport 모바일 장치에만 영향이 있다. charset=문자인코딩방식) content : 정보의 값
-->
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

---

## Tip
