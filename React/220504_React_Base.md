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
