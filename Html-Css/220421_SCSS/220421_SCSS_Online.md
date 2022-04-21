# SCSS!

## SCSS란?

CSS를 작성하다보며, 많은 코드 혹은 중복되는 코드 구조를 가지고있다.  
여기서 코드를 간소화하고, 편리하게 작성을 도와주는 전처리기(시스템)이다.

---

### _SCSS 시작하기_

1. 프로젝트 폴더의 npm(Node Package Management)를 통해서 설치  
   터미널 : npm init -y

2. 정상적으로 설치 되었는지 확인.  
   package.json 파일 생성 확인.

3. SASS 전처리기 설치  
   터미널 : npm i -D parcel-bundler : 개발 의존성 번들러 만들기  
   설치 확인 : package.json의 sass 버전 확인 .

4. 개발환경 구성  
   package.json 파일에서

```json
 "scripts": {
   <!-- 개발 서버 dev로 index.html 실행-->
  "dev": "parcel index.html",
  <!-- parcel 번들러가 index.html 빌드 작업 실행 -->
  "build": "parcel build index.html"
},
```

5. 확장자 \*.scss 파일 만든 후 작성하기

6. npm run dev으로 개발 화면 확인하기  
   url을 터미널 창으로 전달 받아 확인 할 수 있다.

---

### _SCSS 시스템?_

_scss 파일을 만들면 설치한 parcel 전처리기가 scss파일을 css파일로 컴파일한다._  
_변환된 css파일은 프로젝트에서 번들 설치시 dist라는 폴더에 생성되며, 해당 css파일을 html에 적용해준다_

---

### _SCSS 알아보기_

1.  주석  
    _주석은 기존의 css의 /\*\*/ 와 //를 사용할 수 있다._

    **차이점**  
    _"/**/"와 "//" 의 차이점은 전처리기가 컴파일 시 컴파일 파일에 "/**/"을 컴파일하여 주석으로 작성하지만 "//"은 제외된다_

1.  SCSS의 중첩

- _자식의 요소의 css를 여러줄의 선택자가 아닌 부모 css안에 언선하여 하나의 코드안에 중첩으로 선택자가 들어갈 수 있다._

- _선언 방식은 부모안에 자식의 선택자를 사용해서 코드를 작성하면 되고 중첩은 하위 요소로라고 지정하고 사용된다._

- _자식요소라고 지정하기 위해서는 자식요소 앞에 >를 작성하면 자식요소라고 판단한다_

```SCSS
.container {
//SCSS
  // 자식요소를 선언하기 위해서는 앞부분에 작성하면된다.
  >ul {
    li {
      font-size: 40px;

      .name {
        color: royalblue
      }

      .age {
        color: orange
      }
    }
  }
}
```

3. 상위(부모) 선택자 참조

- & 기호를 사용하며 자신을 감싸고 있는 부모 요소를 지칭한다.
- 부모요소 접근하여 속성을 지정할 수 있다.

```SCSS
//SCSS
.btn {
  position: absolute;

  //& == .btn 상위의 선택자를 참조한다
  &.active {
    color: red;
  }
}

.list {
  li {

    // & == li  자신이 선언된 영역의 상위 선택자를 참조(치환)한다.
    &:last-child {
      margin-right: 0;
    }
  }
}
```

```scss
//상위 선택자를 참조해서 간소화 한다.
.fs {
  // & == .fs
  &-small {
    font-size: 12px;
  }

  &-meduim {
    font-size: 14px;
  }

  &-large {
    font-size: 16px;
  }
}

// CSS
.fs-small {
  font-size: 12px;
}
.fs-meduim {
  font-size: 14px;
}
.fs-large {
  font-size: 16px;
}
```

4. 중첩된 속성

- 중첩되는 margin, padding, font, table 속성을 이름으로 구분하여 작성하는 방식
- 네임스페이스 font: 명명하고 아래 속성을 지정해서 필요 속성을 간소화 하여 작성할 수 있다.

```scss
//SCSS
// 중첩된 속성
.box {
  // font-Name : -Name이 들어가는 속성은 네임스페이스가 같다고 표현한다.
  // 네임스페이스란 이름을 통해 구분가능한 범위를 만들어 내는 것
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  }

  margin: {
    top: 10px;
    left: 20px;
  }

  padding: {
    top: 10px;
    bottom: 40px;
    left: 20px;
    right: 30px;
  }
}

// CSS
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 30px;
}
```

5. 변수

- _SCSS에서는 변수처럼 속성 값을 사용 할 수 있다._
- _변수앞에 $표시로 변수 선언한다._
- _유호 범위 사용 가능한 범위가 있다. "{}" 안에 작성하면 내부에서 만 사용할 수 있고, 최상위에 선언시 전역 변수처럼 사용가능하다_
- _변수의 특성 처럼 하위의 재정의 시, 해당 값으로 변수 값이 변환된다._

```scss
//SCSS
.container {
  $size: 200px;
  position: fixed;
  top: $size;
  .item {
    // 재할당
    $size: 100x;
    width: $size;
    height: $size;
    transform: translateX($size);
  }
  // left == 100
  left: $size;
}

//CSS
.container {
  position: fixed;
  top: 200px;
  // 재정의 된 값
  left: 100x;
}
.container .item {
  width: 100x;
  height: 100x;
  transform: translateX(100x);
}
```

6. SCSS의 연산

- SCSS에서는 연산이 가능하다 **_단 / 는 font의 단축 속성 때문에 다른 방법으로 연산해야한다._**
- 나누기 "/" 사용하기
  - 연산이 필요한 부분을 ()로 묶어서 사용하기
  - 변수를 할당하여 사용하기 변수 $size를 사용해서 /를 사용하면 연산으로 계산한다.
  - calc() 함수를 사용해서 연산하기, 하지만 잘 사용하지 않는다.
- 기본적으로 연산은 같은 단위로 연산하는 것을 기본으로 한다.

```scss
//SCSS
// margin: 10px+20px / 2 앞의 연산자를 하면 연산으로 구분한다.
div {
  width: 20px + 20px;
  height: 40px - 10px;
  font-size: 10px * 2;
  margin: 30px / 2;
  padding: 20px % 7;
}

.box {
  background-color: royalblue;
  width: calc(100% - 200px);
  height: 100px;
}
```

7. 재활용의 @mixin

- @mixin 키워들 사용해서 css 코드를 재활용 할 수 있다.
- 함수 처럼 매계변수를 받아 값을 사용 할 수 있다.
- **매계변수는 여러개 사용 할 수 있으며, 기본 값을 지정 할 수 있고, 인수에 변수명을 작성하여 해당 인수에만 값을 할당 할 수 있다.**
- 재사용시 사용 영역안에 @include를 사용해서 작성하며 @include mixinNm(이름)을 사용한다.

```scss
//CSS
.Mixin {
  width: 200px;
  height: 200px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Mixin .item {
  width: 100px;
  height: 100px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

// SCSS
@mixin center($size: 100px, $color: tomato) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: $size;
  height: $size;
}

.Mixin {
  @include center(200px);
  .item {
    // 매개변수의 순서를 맞춰줘야한다.
    // 굳이 인수를 지정할 필요없이 키워드 인수를 사용할 수 있다.
    // 아래와 같이 사용할 수 있다.
    @include center($color: green);
  }
  .box {
    @include center();
  }
}
```

8. 반복문 !!!!

- SCSS에서는 반목문이 사용 가능하며 중복되는 코드를 반본적으로 찍어 낼 때 사용 많이 사용한다.
- 특성은 아래와 같이 주석으로 코드와 같이 보자

```scss
// 선택자에게 바로 $i를 바로 css 코드에 사용 할 수 없다.
// #기호를 i 값을 보간하여 사용해야 한다.
// css 작성 범위 코드에서는 바로 사용 할 수 있다.
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) {
    width: 100px;
  }
```

9. 함수

- @mixin과 비슷한 개념이지만, @mixin의 목적은 재활용, @function의 목적은 연산에 더 다깝다.
- 특정 요소의 비율, 혹은 재생성 시 요소의 크기 설정이 필요한 연산에 사용된다.
- @function 키워드를 사용한다. 반환하는 값은 @return 뒤에 작성한다.

```scss
//SCSS
// 연산의 목적으로 만들어진다.
@function ratio($size, $ratio) {
  @return $size * $ratio;
}

// 함수의 활용
.box {
  $width: 100px;
  width: $width;
  height: ratio($width, 1/2);
  @include center();
}
```

10. 색상의 내장 함수

- 색상의 관련된 내장함수를 가지고 있으며, 효과를 주거나 생상의 대비를 줄 때 사용한다.
- 아래 코드는 :hover 가상함수를 사용 될 때 이미지의 변화를 주는 내장 함수를 정리하였다.
- 내장 함수각각 인수가 다를 수 있으며 확인하고 사용해야한다.

```scss
// 색상 내장함수
.colorBox {
  $color: royalblue;

  width: 200px;
  height: 100px;
  margin: 20px;
  border-radius: 10px;
  background-color: $color;

  &:hover {
    background-color: darken(royalblue, 10%);
  }

  &.built-in {
    // 내장함수
    // background-color: $color;

    // 생상의 조합
    // background-color: mix(royalblue, red);

    // 밝게 표현 10% 만큼 발게 표현해준다.
    // background-color: lighten(royalblue, 10%);

    // 10% 만큼 어둡게 표현한다.
    // background-color: darken(royalblue, 10%);

    // 채도를 높여주는 내장함수
    // background-color: saturate(royalblue, 40%);

    // 채도를 낮춰준다
    // background-color: desaturate(royalblue, 40%);

    // 색상을 회색화 한다.
    // background-color: gray(royalblue);

    // 생상을 반전시켜준다,
    // background-color: invert(royalblue);

    //투명도를 지정해준다.
    // 표준에서는 4개의 인수지만, csss에서는 2개의 인수면 충분하다.
    // background-color: rgba(royalblue, 0.5);
  }
}
```

11. 가져오기 CSS의 _@import url("")_

- css의 다른 css파일을 참조 하는 기능을 똑같이 사용할 수 있다.
- 차이점 : 한줄의 코드로 여러가지 css파일을 가져올 수 있다.
- 간소화된 표현으로 알아보기 쉽다.
- 작성은 파일 최 상위에다 작성한다.

```scss
// 가져오기!!
@import url("./sub.scss"); //기본방법

// 여러개의 css 파일을 간소화 하는 방법으로 가져올 수 있다.
@import "./sub.scss", "/sub2.scss";
```

12. 데이터의 종류

- 데이터의 종류는 숫자, 글씨, 색상, 참거짓, null, list(array 개념), map(key, value)가 있다.
- 색상에서 사용되는 red, royalblue, green은 글자가 아닌 색상으로 분류 된다.
- _list는 배열의 시작이 1부터 시작이다._
- _map은 key의 값으로 접근해서 value값을 가져와야 한다. 아래의 @each문을 사용해서 접근에 대해 알아보자_

```scss
// 데이터 종류
$nubmer: 1; // .5 1px , 1em 다 숫자
$string: bold; // 프러퍼티의 값, 경로
$color: red; // red blue는 색상이댜 #fffff
$boolean: true; // false
$null: null; //null은 속성을 사용 안하도록  할 수 있다.

// 배열과 유사하다. 1부터 시작한다.
$list: orange, royalblue, yellow;

// 객체 대이터와 비슷하다 key, value로 구분하다.
$map: (
  o: orange,
  r: royalblue,
  y: yellow,
);
```

13 @each 반복문, JS의 foreach 개념과 비슷

- 특정 객의 값에 접근하는 방식이다.
- 배열, map 같으 내용의 접근 시 자주 사용 될 듯 하다.

```SCSS
//list
$list: orange, royalblue, yellow;

// 객체 대이터와 비슷하다 key, value로 구분하다.
$map: (
  o: orange,
  r: royalblue,
  y: yellow
);

// foreach의 개념과 같다
// list를 @each로 사용하기
//  $c, $k, $v 키워드는 사용자 재량이다.
@each $c in $list {
  .box {
    color: $c;
  }
}

@each $k, $v in $map {
  .box-#{$k} {
    color: $v;
  }
}
```

14 @mixin 재활용 요소에 대한 설정 추가하기 (@content)

- 재활용 요소에 추가적인 요소를 추가할 때 사용한다.
- 작성 방식은 @inclue() {추가 내용}으로 작성 하며
- @mixin 내부 @content 부분에 추가내용이 들어간다.

```scss
//SCSS
@mixin left-top {
  position: absolute;
  top: 0;
  left: 0;
  @content;
}

.container {
  width: 100px;
  height: 100px;
  @include left-top();
}

.box {
  width: 200px;
  height: 200px;
  @include left-top() {
    bottom: 0;
    right: 0;
    margin: auto;
  }
}

//CSS
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
}

.box {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

---
