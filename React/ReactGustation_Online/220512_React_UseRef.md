# Ref로 DOM 다루기

### Ref?

_Ref란 DOM을 다루는 Hook Reference를 Ref라고 한다?_  
_브라우저에서 이해하는 논리적인 구조를 DOM이라고 하고, js에서는 tag를 dom을 통해 접근하고,_  
_React에서도 특정 화면을 element를 DOM 트리로 이해하고 사용하기 때문에 DOM을 조작한다고 한다._

### Effect vs Use Ref

**화면이 초기화 될 때, input 박스에 focus 효과를 주자**

- Effect

```html
<script type="text/babel">
  const rootEl = document.getElementById("root");
  const App = () => {
    React.useEffect(() => {
      document.getElementById("input").focus();
    }, []); //빈 배열일 때는 한번만 실행한다.

    return (
      <>
        <input id="input" />
      </>
    );
  };

  ReactDOM.render(<App />, rootEl);
</script>
```

- User Ref

  - why? 개발자가 Dom의 document의 접근하면 비효울 적일 수 있는 가능성이 있고
  - 그 가능성을 줄이고 React의 최적화를 사용하기 위해서 사용한다.
  - useRef, ref를 통해서 Document에 접근 할 수있다.

  ```html
  <script type="text/babel">
    const rootEl = document.getElementById("root");
    const App = () => {
      const inputRef = React.useRef();
      const divRef = React.useRef();
      React.useEffect(() => {
        inputRef.current.focus();
        // document.getElementById("input").focus();

        setTimeout(() => {
          divRef.current.style.backgroundColor = "pink";
        }, 1000);
      }, []);

      return (
        <>
          <input ref={inputRef} />
          <div
            ref={divRef}
            style={{ height: 100, width: 300, backgroundColor: "brown" }}
          ></div>
        </>
      );
    };

    ReactDOM.render(<App />, rootEl);
  </script>
  ```
