# React Base

### React Lib??

React는 lib를 기준을 바라보고, 개발의 편의를 도구의 모음이라 생각하고 배워보자  
_사용자의 인터페이스를 만들어주는 lib라고 React에서 말한다._

- React는 많은 개발자들의 환경 구성이 많다.
- 문제를 해결할 방법을 찾기 쉽다.
- 즉, 생태계환경 매우 많이 좋다.(lib을 많이 나오고 있다.)

### DOM, JS

- DOM

  - 브라우저가 이해아흔 element의 원형이다.
  - 메모리의 웹페이지 구조를 표현하고 있다.

- Vanila JS

  - 순수 자바스크립트

- [CodeSandBox](https://codesandbox.io/)

  - FrontEnd에서 테스트할 수 있는 사이트
  - React, HTML, CSS 등을 많은 것을 테스트 할 수 있다.

### JSX, Babel 다루기

- JSX

  - 정의 : 문자도 html도 아닌 JS의 확장 문법
  - Spread 연산자를 사용해서(...) 요소를 분해해서 필요 요소를 적용 할 수 있다.

    ```jsx
    const el = <h1>Hello World</h1>;
    ```

- Babel
  - JS의 컴파일러이다.
  - jsx를 읽어 컴파일 할 수 있도록 도와준다.
  - 변수 및 많은 기능을 한번에 사용 할 수 있도록 도와준다.

### CDN으로 JSX, Babel 설치하기

```html
<!-- jsx -->
<script
  crossorigin
  src="https://unpkg.com/react@17/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
></script>
<!-- babel -->
<script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

---

### React 요소 생성 및 DOM에 적용하기

- Element(html의 요소)안에 값을 넣어주기

  ```jsx
  // 요소 생성
  const element = React.createElement("h1", { children: "Hello world" });

  // DOM에  적용하기
  ReactDOM.render(element, rootElement);
  ```

- Element의 생성에 속성 넣어주기

  - children의 요소는 배열로 여러개 넣을 수 있다.

  ```jsx
  const rootElement = document.getElementById("root");
  // createElement(tag, properties, childrenValue)
  // chlidrenValue가 우선적으로 Properties 보다 우선순위가 높다
  const element = React.createElement(
    "h1",
    {
      className: "title",
      children: ["Hello, World!!", "good"],
    },
    "Hello World !!!!"
  );

  ReactDOM.render(element, rootElement);
  ```

- JSX를 사용하여 Element 넣어보기!

  - babel script 선언하기
  - 요소의 속성을 정리한 객체를 선언하기
  - Spread 연산자를 통한 요소에 속성 넣어주기
  - 그 요소를 DOM에 추가하기

    ```html
    <script type="text/babel">
      const text = "Hello, world!!!!!";
      const title = "title";
      // 요소의 속성에
      const props = { className: title, children: text };
      // Spread 연산자 사용하기
      const customH1 = <h1 {...props} />;
      const element = customH1;

      ReactDOM.render(element, rootElement);
    </script>
    ```

- JSX 표현식을 통해서 컴포넌트 만들기

  - 컴포넌트는 대문자를 사용한다.
  - Function으로 만든 element(요소)는 재사용이 가능하다.
  - children의 요소는 제약이 없이 만들 수 있다.

  ```jsx
  // jsx를 리턴하는 함수이다. para의 {}에는 props이다.
  // 소문자로 React의 Commpent는 대문자를 사용해야한다. 이유는 tag와 중복을 방지하기 위해서
  const Paint = ({ title, description }) => (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );

  // 해당 변수에 속성 값을 넣어 태그를 연속으로 찍어낸다.
  const ele = (
    <>
      //커스텀 엘리먼트
      <Paint title="Data1" description="data1" />
      <Paint title="Data2" description="data3" />
      {paint("Bad", "bad")}
      {paint("Soso", "soso")}
    </>
  );
  ```

---

- JS와 JSX 섞어 쓰기(Interpolation)

  - return하는 ( )를 jsx를 영역이고 { }안에는 js의 영역으로 나눈다
  - return은 하나의 컴포넌트만 리턴한다.
  - 2가지의 js와 jsx를 사용해서 개발자가 필요하는 하나의 컴포넌트를 생성한다.
  - 컴포넌트는 return이용해서 컴포넌트를 사용해서, 리턴하기 때문에 반복문에 유용하지 않다.

  ```html
  <script>
    const Number = ({ number, selected }) => {
      return selected ? <h1> {number} </h1> : <h3>{number}</h3>;
    };

    // 해당 변수에 속성 값을 넣어 태그를 연속으로 찍어낸다.
    const ele = (
      <>
        <Text text="Text" />
        <Text text="text" />

        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
          <Number number={number} selected={number === 3}></Number>;
        })}
      </>
    );

    ReactDOM.render(ele, rootEle);
  </script>
  ```

---
