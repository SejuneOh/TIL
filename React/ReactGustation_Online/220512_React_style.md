# React style 입히기

## Goals

_React에서 CSS 및 스타일을 입히는 방식을 알아보자_

### Style을 입히는 방법

1. 컴포넌트의 요소의 inline으로 작성하여 입히는 방식

```html
<style>
  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .blue {
    background-color: #008cba;
  } /* Blue */
</style>

<script>
  const element = (
    //jsx 요소에 class를  선언하여 작성하는 방법
    <button className="button blue">blue</button>
        </>
      );

      ReactDOM.render(element, document.getElementById("root"));
</script>
```

2. 구성 컴포넌트의 prpos로 전달 받아서 작성하는 경우

```html
<script type="text/babel">
  // props를 통해서 받을 수 있다.
  function Button(props) {
    return <button className={`button ${props.color}`}>{props.color}</button>;
  }
  const element = (
    <>
      <Button color="red" />
    </>
  );

  ReactDOM.render(element, document.getElementById("root"));
</script>
```

3. props의 ...분해 연산자를 통해서 여러가지 스타일을 적용할 수 있다.

   - 컴퍼넌트의 같은 props의 선언이 2가지 있는 경우 후자의 선언된 경우가 적용된다.

   - css의 클래스는 camelCase를 선언하면 유추하여 적용한다.

   - Parameter로 선언한 props는 컴퍼넌트의 선언해야 적용된다.

   - 공통된 요소는 element를 리턴하는 함수에서 적용하고, 최종 컴퍼넌트에서 각각 변경 가능하다.

   - 선언의 우선순위는, 컴포넌트 inline style > 컴포넌트 요소의 inline style > css class 선택자
