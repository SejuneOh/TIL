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

### CSS 선택자

_선택자란?_  
_CSS에서 요소를 선택하여 꾸밀때 어떤 요소를 선택할 지 정하는 방법이다._

1. 기본 선택자  
_기본적으로 요소, CLASS, ID, *(모든요소) 선택을 할 수 있는 선택자를 말한다_

선택자|설명|
:--:|:--:|
*| 모든 요소를 선택하는 선택자, 단독으로 사용하지 않고 복합 선택자에서 사용한다.|
TAG이름(div, span...)| 태그를 구분해서 선택하는 선택자
.class | 클래스 이름으로 선택하는 선택자 중복가능
#id | id 속성으로 구분하겠다는 선택자 중복 불가

```css
* {
  /* 모든 요소 선택 */
}

 div{
   /* div tag를 선택하는 선택자 */
 }

 .className{
   /* 클래스 이름으로 구분 */
 }

#id {
  /* id 이름으로 구분 */
}

```

2. 복합 연산자

- 일치 선택자(abc.xyz)  
기본 선택자 붙여서 사용할 때, 동시에 만족하는 요소를 선택한다 
 ```css
 div.orange{
   /* div태그에서 oranage 클래스인 모든 요소를 찾는다. */
 }
 ```
- 자식 선택자(abc>xyz)  
하위 요소에서 특정 선택자를 통해서 선택한다.
```css
ul>.orang{
  /* ul 자식 요소에서 orange 클래스를 찾는다. */
}
```
- 하위 선택자(abc xyz)  
선택자의 띄어쓰기로 구분하여 자신의 하위 요소를 찾는다.
```css
div .ornage{
  /* div 하위 요소 중 orange 클래스를 찾는다  */
}
```
- 인접 형제 선택자(abc+xyz)  
형제 요소중 특정 선택자를 찾는다.
```css
.orange+li {
  /* list중 같은 형제중에 orange 클래스를 찾는다. */
}
```
- 일반 형제 선택자(.xyz~abc)  
형제 요소중 모든 xyz 요소를 찾는다.
```css
.orange~li{
  /* list 중 orange 클래스 모든 요소를 찾는다. */
}
```

- +속성 선택자([abc속성])  
특정 속성을 선택하여 요소를 찾는다.
```css
[tpye="password"] {
  /* 타입이 password 요소를 찾는다. */
}
```

--- 

### 스타일 상속

_스타일 상속이란?_  
_조상의 스타일이 자식 요소에도 적용되는 부분을 말한다._  
_대부분 글자 관련 요소들은 속성들은 상속이된다. 하지만 전부는 아니다._  
_visibility, opacity, font, color, line-height, text-align, white-space 상속 요소들_
<br/>
<br/>


### 강제 상속 
상속이 안되는 속성도 강제로 상속이 가능하게 할 수 있다.   
iherit 값을 이용하여 상속이 가능하다.  
다음 예시를 확인하자 .

```html
<div class="praent">
  <div class="child"></div>
</div>
```

```css
.praent{
  width: 300px;
  height: 400px;
  background-color: red;
}

.child{
  width: 100px;
  /* 부모의 요소 높이를 상속 받는다. */
  height: inherit;
  background-color: orange;
}
```

---

### 선택자의 우선순위
_어떤 css 선언의 속성을 적용할 것인지 결정하는 우선순위를 정하는 방법을 말한다._

- CSS 선택자의 점수를 붙여 합산한 값이 높을수로 우선순위가 높다. 
- 점수가 같을경우 코드상 마지막으로 선언한 CSS 선택자가 적용된다. 

점수를 계산하는 방법은 아래와 같다 .

선택자| 점수|추가설명|
:--|:--:|:--:
important|최상위|
인라인선언| 1000
id|100
class| 10|가상클래스 :hover, :active 클래스로 간주한다. :not(클래스)는 점수에 들어가지 않는다.
tag|1| ::before ::after
*| 0
상속 | X


```html
<div class="color_green" id="color_yellow" style="color: orange">
  Hello world!
</div>
```

```css
div {
  /* 최상위 */
  color: red !important;
}

#color_yellow {
  /* 100 */
  color: yellow;
}

.color_green {
  /* 10 */
  color: green;
}

div {
  /* 1 */
  color: blue;
}

* {
  /* 0 */
  color: darkblue;
}

body {
  /* 상속 x */
  color: violet;
}
```

----


## 가상 클래스, 가상요소

- 가상클래스  
	:hover => 어떤 요소의 마우스 커서가 올라가 있는 동안 선택  
	:active => 어떤 요소에 마우스를 클릭하고 있는동안 선택  
	:focus => 어떤 요소가 포커스가되면 선택 input, a, button, label  사용자랑 대화형 요소들만   
				즉 포커스가 가능한 요소만 가능하다, 화면의 하나만 선택된다.  
	:first-child => 어떤 선택자 형제 요소중 천째라면 선택 요소가 없으면 선택되지 않는다  
	:last-child => 형제 요소중 마지막 요소를 찾는다.  
	:nth-child(n): n번째 요소를 찾는다  (2n) 0부터 시작해서 2의배수 번째 자식이 선택된다. 홀수는 (2n+1) 첫번째 요소 제외(n+2)  
	:not(xzy) => xyz가 아닌 abc 요소 선택
- 가상요소  (**content는 무조건 사용해야한다!!!**)  
	::before => abc 요소의 내부 앞에 내용 인라인 contents를 삽입  
	::after => abc 요소의 내부 뒤에 내용 인라인 contents를 삽입 
  