# 상태올리기

## Lifting

### 설명

```txt
상황 : 현재 아이디, 비밀번호 input의 컴퍼넌트를 생성하고, 각 컴퍼넌트의 입력상태를 State로 받아서 2가지 모드 입력 값이 있을 때
log in 버튼을 활성화한다.
```

**문제사항**

```txt
형제 간의 상태는 확인 할 수 없으며, 상태가 활성화 되도, 버튼이 확인 할 수 없는 상태이다.
```

**해결방법**

- id, pwd의 상태를 부모 요소로 올린다.

```js
const App = () => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const handleIdChange = (ev) => {
    setId(ev.target.value);
  };

  const handlePwdChange = (ev) => {
    setPwd(ev.target.value);
  };
};
```

- 현재의 상태를 입력 받았을 때, children 요소의 함수로 해당 상태 변화를 전달한다.

- 전체 컴퍼넌트에서는 자식의 요소의 상태를 바로 접근할 수 있으며, 형제 사이에서 접근이 가능하다.

```html
<>
  <Id handleIdChange={handleIdChange} />
  <PWD handlePwdChange={handlePwdChange} />
  <br />
  <button
    disabled={id.length === 0 || password.length === 0}
    onClick={handleLoginClick}>Login</button>
</>
```

- 접근 가능한 상태에서 필요 상태를 요하는 요소에서 조건 처리 할 수 있다.

- 전체 소스

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const rootEl = document.getElementById("root");

      const Id = ({ handleIdChange }) => {
        return (
          <>
            <label>ID:</label>
            <input onChange={handleChange} />
          </>
        );
      };

      const PWD = ({ handlePwdChange }) => {
        return (
          <>
            <label>Password:</label>
            <input type="password" onChange={handlePwdChange} />
          </>
        );
      };

      const App = () => {
        // 형제의 둘 사아의 상태를 알 수는 없다.
        // 형제의 사이에서 상태를 알 수 있도록 부모 요소에 상태 값을 올리는 것을 lifting을 하여 사용한다.
        // 반대의 개념은 drilling이라도 한다.
        const [id, setId] = React.useState("");
        const [pwd, setPwd] = React.useState("");

        const handleIdChange = (ev) => {
          setId(ev.target.value);
        };

        const handlePwdChange = (ev) => {
          setPwd(ev.target.value);
        };

        const handleLoginClick = () => {
          alert(`id:${id}, password:${password}`);
        };
        return (
          <>
            <Id handleIdChange={handleIdChange} />
            <br />
            <PWD handlePwdChange={handlePwdChange} />
            <button
              disabled={id.length === 0 || password.length === 0}
              onClick={handleLoginClick}
            >
              Login
            </button>
          </>
        );
      };

      ReactDOM.render(<App />, rootEl);
    </script>
  </body>
</html>
```
