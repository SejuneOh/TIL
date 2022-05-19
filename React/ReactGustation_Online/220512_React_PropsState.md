# Props And State

_Props와 State을 이해하기 위해서는 JSX와 React의 Elemnet(요소)의 생성을 이해해야한다._

## JSX?

```txt
React에서 js의 확장 언어 방식으로, 마크업과 로직을 넣어 분리하는 대신
마크업과 로직을 섞어 넣은 컴포넣은 하나의 요소의 뭉치를 컴포넌트(Component)라고 부른다.
```

```js
function App() {
  return (
    <div className="App">
      // Component
      <Composition />
      <Extraction></Extraction>
    </div>
  );
}

// 표현식
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

- JSX는 JS와 가깝기 때문에, html Attribute html 이름 대신, camelCase로 프러퍼티를 명명한다.
  - class => className, tabindex => tabIndex
- JSX는 명시적으로 작성되지 않는 내용은 주입하지 않는다.
- JSX는 객체를 표현한다.
- 아래 표현식은 같은 내용이다.

```js
const element = <h1 className="greeting">Hello, world!</h1>;
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

- React에서는 Element는 plain object이며, 불변 객체입니다.
- ReactDOM.render()를 통해서 Rendering 할 수 있다.

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

## Component

- 개념적으로 JS의 함수와 유사합니다.
- pros라고 하는 임의이 입력을 받은 후, 어떻게 표시되는지 기술을하는 React Element를 반환합니다.
- 함수 Component vs Class Component

  - Function Component
    - 객체의 인자를 받은후 react 엘리먼트를 반환하는 함수형 컴퍼넌트
    ```js
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```
  - Es6 class를 사용하여 컴포넌트를 정의 할 수 있습니다.

    - 추가 기능을 사용 할 수 있다.

    ```js
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    ```

## Props?

_React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 자식을 해당 컴포넌트의 단일 객체로 전달하는 것을 props 라고 한다._

- props 는 읽기 전용이다.
- 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서되는 안됩니다.
- 수정을 하기 위해서는 State의 개념을 알아야합니다.

## 컴포넌트 합성

_컴포넌트는 출력 시 다른 컴포넌트를 참조할 수 있다. 동일한 추상 컴포넌트를 사용할 수 있음을 의미한다._

```js
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

## Component Extract

- 컴포넌트를 여러 개의 작은 컴포넌트 나누는것을 의미한다.

```js
// 컴포넌트의 분리
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
```

---

## State ans LifeCycle?

- React의 요소의 변경되는 props가 있다면, 해당 요소를 하나의 컴포넌트로 가져온다
- 가져왔을 때, 변경되는 값을 State에 추가해야하며, 비공개이며 컴포넌트에 의해 완전히 제어된다.

- state를 등록하는 방법중 class에 local state로 등록하기

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

- 생성자 함수에 props 등록하기

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

- 기존 컴포넌트에 등록된 props를 삭제한다.

### State lifeCycle

- 컴포넌트가 삭제 될 때 해당 컴포넌트 사용중인 리소스를 확보하는 것이 중요하다.
- 렌더링이 될 때, 무언가를 설정하는 것을 Mounting이라고한다.
- 랜더링 된 컴포넌트 DOM이 삭제 될 때마다 무언가를 해제하는 것을 unMounting이라고 한다.
- 위의 Mounting과 unMounting을 하는 function 생명주기 함수라고한다.

### State 알고 잇어야 할 것들

- 직접 수정해서는 안된다. setState를 정하고 거기서 변경하는것을 원칙으로 한다.
- State 업데이트는 비동기적일 수 있다. setState에서 state, props를 받아 수정하는 것을 권장한다.
- State는 다양한 독립 적인 변수이며, 독립적으로 업데이트가 가능합니다.
- State가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근 할 수 없다.

---
