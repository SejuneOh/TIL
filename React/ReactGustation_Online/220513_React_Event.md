# React Event

- React에서는 js와 이벤트 처리와 유사하지만 문법적인 차이가 있다.
- camelCase로 이벤트를 작성한다.
- 문자열이 아닌, 함수로 이벤트 핸들러를 전달한다.
- 명시적으로 기본 이벤드 동작은 preventDefault() 함수로 제어한다.
- 엘리먼트가 렌더링 될 때 이벤트 리스너를 제공해 이벤트를 처리한다.

- 이벤트의 사용 예제
```js
const handleClickCapture1 = () => {
  console.log("handleClickCapture1");
}

const handleClickCapture2 = () => {
  console.log("handleClickCapture2");
}

const handleClickBubble = () => {
  console.log("handleClickBubble");
}

const handleButtonClick = () => {
  console.log("Click");
}

export default function Event() {
  return (
    <div onClickCapture={handleClickCapture1}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>

  )
}
```

## 합성 이벤트(Synthetic Event)

```txt
정의 : 엘리먼트가 렌더링 될 때 이벤트 리스너를 제공해 이벤트를 처리할 때, 모든 브라우저에서 동일하게 처리하기위해서 Wrapping된  Synthetic Event 객체를 전달 받아 사용된다.
```
- 합성 이벤트는 대부분의 인터페이스가 브라우저의 고유 이벤트와 같다.

## Pooling

- Sythetic Event가 어떻게 사용되고 리소스가 관리되는지 Pooling의 대한 개념을 알아보자. 

- 정의 
```txt
pool은 컴퓨터 언어로 해석하자면 재사용 될 준비를 하는 자원의 집합이고
합성 이벤트도 pool에 의하여 자원이 관리 된다. 
```

- 처리 단계 
  - 합성이벤트 pool에서 합성이벤트 객체를 참조하여 받고
  - 사용자 이벤트 핸들러에서 자원을 사용 한다.
  - 이벤트가 완료 되면, 해당 객체는 초기화한다.
  - 이벤트의 초기화로 해당 객체를 비동기적으로 사용 할 수는 없다. 


## Bubble

_자식 이벤트로 부터 부모요소로 이벤트가 전이 되는 것_  
_자식 요소의 중복된 이벤트로 부모요소의 이벤트까지 영향이 가는 것을 의미한다._

## Capture

_부모요소의 이벤트가 자식요소에게 전파되는 것을 이벤트 캡처링이라고 한다._

---