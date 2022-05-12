# React Event Handler, 컴포넌트 상태 다루기

### React Event

- 형식
  - camelCase 형식으로 사용한다.
  - 여러가지의 이벤트를 한번에 적용할 수 있다.
  - React의 Event는 이벤트 함수를 선언과 동시에 요소의 inline에 작성하는 것을 권장한다.

```html
<script type="text/babel">
  const handleClick = () => alert("click!!!");
  const rootEl = document.getElementById("root");
  // const el = <button onClick={() => alert("pressed")}>Press</button>;
  const el = <button onClick={handleClick}>Press</button>;
  ReactDOM.render(el, rootEl);
</script>
```

- object.assign: 바뀌는 부분이 있으면 변경한다.
- React의 요소는 불변 객체로 지속적으로 Render를 해주는 것을 함수로 빼줬다.
- 요소의 상태를 가지고있는 Obj를 가지고 변경을 주면서 이벤트 발생 시 사용했다.
- State의 변경은 state를 변경하는 함수로만 변경했어야 했다.

```html
<script>
  const rootEl = document.getElementById("root");
  const state = { keyWord: "", typing: false, result: "" };

  const App = () => {
    function handleChange() {
      setState({ typing: true, keyWord: event.target.value });
    }

    function handleClick() {
      setState({
        type: false,
        result: `We find result of ${state.keyWord}`,
      });
    }
    return (
      <>
        <input onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
        <p>
          {state.typing ? `Looking for ${state.keyWord}....` : state.result}
        </p>
      </>
    );
  };

  function setState(newState) {
    Object.assign(state, newState);
    render();
  }

  function render() {
    ReactDOM.render(<App />, rootEl);
  }

  render();
</script>
```

---

### 컴포넌트

- 엘리먼트의 요소들이 모인 것을 컴포넌트라고 한다.
- 집합체의 상태관리

**State**

- 독립적인 컴포넌트 관리를 위한 객체이다.
- 기준 값을 설정 할때는 기본 자료형 것 거의 모두 들어 갈 수 있다.
- 컴포넌트의 생성에서 state를 초기화 해주면,
- useState는 배열을 리턴하며, 0번째 배열은 초기값, 1번째는 업데이트를 해주는 객체를 리턴해준다.

```html
<script>
  // 상태 업데이트 배열
  const [keyword, setKeyword] = React.useState("");
  const [result, setResult] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  // Event 적용
  function handleChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(`We find result of ${keyword}`);
  }
</script>
```

---

### Side Effect(부수효과)

- localStorage를 읽어 드리면서 시간이 많이 소비가 될 수 있다.
- state 변경에서 초기값을 가져오거나, resource가 소비가 있을 때, 초기화를 늘릴 수 있다.
- useSate를 통한 변화가 아닌 부수적인 변화를 주기 위해서 React.useEffect를 써서 부수적인 효과를 줄 수있다.
- 소스에서 확인해보자

```html
<script type="text/babel">
  const rootEl = document.getElementById("root");

  // 컴포넌트
  const App = () => {
    const [keyword, setKeyword] = React.useState(() => {
      return window.localStorage.getItem("keyword");
    });
    const [result, setResult] = React.useState("");
    const [typing, setTyping] = React.useState(false);

    // 언제 실행되는가 ?
    // 2번째 인자로 배열로 state를 상태를 넣어 줄 수있다.
    // 값이 변경이 될 때마다, 부수적으로 효과를 줄 수있다.
    // 배열 값을 안주면 모든 변화에 실행한다
    // 빈배열은 처음 한번민 실행한다. (컴포넌트가 그려지는 순간)
    React.useEffect(() => {
      console.log("Effect");
      window.localStorage.setItem("keyword", keyword);
    }, [keyword, typing]);

    function handleChange(event) {
      // window.localStorage.setItem("keyword", event.target.value);
      setKeyword(event.target.value);
      setTyping(true);
    }

    function handleClick() {
      setTyping(false);
      setResult(`We find result of ${keyword}`);
    }
    return (
      <>
        <input onChange={handleChange} value={keyword} />
        <button onClick={handleClick}>Search</button>
        <p>{typing ? `Looking for ${keyword}....` : result}</p>
      </>
    );
  };

  ReactDOM.render(<App />, rootEl);
</script>
```
