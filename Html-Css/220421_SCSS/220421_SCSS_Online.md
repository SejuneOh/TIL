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

6.
