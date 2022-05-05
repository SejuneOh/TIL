# React Hook

_공통적인 부수적인 Effect가 발생하면 하나의 Effect에 설정 시, 같이 선언한 상태의 변화로 다같이 변화가 발생한다_  
_여기서 어떻게, 상태의 값의 변경에 따라서 필요 상태만 변경 할 수 있는지 알아보자._

- 여러가지 상태값이 변경 될 때, 그리고 코드가 반복되면 함수화 하자.
- 커스텀 훅으로(함수화) 만들어서 상태를 관리한다.

```html
<script type="text/babel">
  const rootEl = document.getElementById("root");

  // 커스텀 훅 만들기
  // 커스텀 훅으로 상태관리 페이지 만들기
  function useLocalStorage(itemName, value = "") {
    const [state, setState] = React.useState(() => {
      return window.localStorage.getItem(itemName) || value;
    });

    React.useEffect(() => {
      window.localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
  }

  // 컴포넌트
  const App = () => {
    const [keyword, setKeyword] = useLocalStorage("keyword");
    const [result, setResult] = useLocalStorage("result");
    const [typing, setTyping] = useLocalStorage("typing", false);

    React.useEffect(() => {
      console.log("Effect");
      window.localStorage.setItem("keyword", keyword);
    }, [keyword, typing]);

    function handleChange(event) {
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

---

### Hook의 호출 타이밍

- useState 상태는 인자로 이전 상태의 값이 prev 인자로 들어온다.
- 선언 순서에 호출은 다 하지만, Effect는 Render가 끝난 후 실행한다.
- Render Start -> userState -> Render Over -> Effect
- 모든 컴포넌트의 랜더링과 상태를 하고, Effect는 마지막으로 실행된다.

**컴포넌트의 부모와 자손관계의 Hook의 순서는 어떻게 될까?**

- useEffect: render가 끝난 뒤에 실행된다.
- 자손 컴포넌트 실행되면, 자손의 랜더링이 끝나고 useEffect기 실행뒤 부모의 Effect가 실행된다.
- 클린업은 부모의 클린업, 자식의 클린업을 한다.(처음생성에는 실행되지 않는다.)
- Dependecy Array는 전달 값의 변화가 있는 경우에만 실행된다.

---
