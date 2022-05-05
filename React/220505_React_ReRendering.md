# React Re-Rendering

## Re-Rendering

- JS에서는 변경사항이 생긴 요소는 다시 그린다.
- React에서는 변경된 요소만 다시 그린다.

### JS vs JSX

- JS의 요소가 변경될 때, 요소를 감싸고 있는 부모요소까지 같이 랜더링 된다.
- JSX는 요소의 변경되는 딱 그 요소만 같이 변경된다.

```html
<!-- JS -->
<script>
  const rootEl = document.getElementById("root");
  const random = () => {
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    const el = `
        <button>${number}</button>
        `;
    rootEl.innerHTML = el;
  };

  setInterval(() => {
    random();
  }, 1000);
</script>
<!-- JSX -->
<script type="text/babel">
  const rootEl = document.getElementById("root");
  const random = () => {
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    const el = <button>{number}</button>;
    // rootEl.innerHTML = el;
    ReactDOM.render(el, rootEl);
  };

  setInterval(() => {
    random();
  }, 1000);
</script>
```

### React Rendering 특성

- 불변객체인다.
- 요소의 전달만 할 뿐, 변경 및 반영 리액트가 반영한다.

- 비교 알고리즘

  - 요소의 root요소부터 비교를 시작한다.
  - 타입이 같은 경우 속성을 비교하여, 다를 경우 변경한다.
  - 타입이 다른경우 버리고 새로 그린다.

- 비교시에 Virtual DOM을 사용하여, 비교하고 반영한다.

---
