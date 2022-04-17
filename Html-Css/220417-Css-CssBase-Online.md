# CSS 기본

## Goals
1. CSS 기본 문법 
1. CSS 선언방식
1. CSS 선택자
   1. 선택자 기본
   1. 선택자 복합
   1. 선택자 가상클래스 
   1. 가장 요소
   1. 선택자 속성
1. CSS 상속
1. 선택자 우선 순위 

--- 

### CSS 기본 문법 

- 기본 문법  
```css
/* 
 선택자{
    속성: 값; 
    속성: 값; 
    속성: 값; 
 }
 */

div {
   color: red;
   background-color: blue;
   width: 100px;
   height: 200px;
}
```

--- 

### CSS 선언방식
1. 내장방식
```html
<!--요소안에 전역속성으로 스타일을 지정하는데 유지보수하기 어렵다.  -->
<div style="background-color: red; width: 100px; height: 100px"></div>
```

2. 링크방식   
css 파일을 html 파일과 연결하여 사용하는 방법

```html
<head>
   <link rel="stylesheet" href="./css/main.css">
</head>
<body>
   <span>Text</span>
</body>
```

```css 
/* ./css/main.css */
span {
   color: pink;
}
```

3. @import 방식  
CSS 파일을 직열로 연결하는 방식으로 CSS에서 다른 CSS 파일을 참조해서    
가져와사용하는 방식이다. 메인이 연결되지 않으면 뒤에 CSS파일은 연결되지 않는다.

* INFO  
메인 파일을 먼저 일고 뒤의 연결되는 CSS 파일까지 읽어야하는 경우 양이 많을 경우 지연되는 경우가 있다.



```html
<head>
   <link rel="stylesheet" href="./css/main.css">
</head>
<body>
  <div>
    Import Box CSS
  <div>
</body>
```

```css 
@import("./box.css");

/* ./css/main.css */
div {
   color: red;
   margin: 10px;
}
```

```css 
/* ./css/box .css */
div {
   background-color: blue;
}
```

---

