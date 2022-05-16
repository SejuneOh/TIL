# React 강의 

## Goals
  1. Rendering이 되지 않는 값
  1. 조건부 렌더링
  1. Loop를 이용한 Rendering with key
  1. EventHandler 사용하기

--- 

## **Rendering이 되지 않는 값**

_요소의 값중에 Rendering이 되지 않는 값이 있다. 해당 값들을 이용하면 그리고 싶지 않는 부분을 렌더링 하지 않고 사용 할 수 있다._

**렌더링이 되지 않는 값 : false, null, undefined, true**

위의 값은 Rendering이 되지 않으며, keyword 값으로만 사용 된다.


```js 
import React from 'react'

export default function NoRenderValue() {
  return (

    // 조건 및 화면에 그려주고 싶지 않은 부분에서는 rendering을  사용 못하게 사용할 수 있다.
    <>
      <div>{[false, null, undefined, true]}</div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>
    </>

  )
}
```

--- 


## **조건부 Rendering(falsy, truthly , &&)**

- 랜더링을 할 때에 조건을 사용해서 필요 조건을 사용할 수 있다. 
  
- true(falsy, truthyly) && element, 삼항 연산 자를 통해서도 필요 조건일 때 Rendering을 정할 수 있다.
  -  && 를 사용한 조건부 렌더링은, 앞의 값이 true 일 때 뒤 요소를 렌더링 해준다.
  

```js
import React from 'react'

const arr = Array.from(Array(100), (_, i) => i + 1)

export default function LoopRender() {
  return (
    <>
      {/* {arr.map(num => num % 7 === 0 ? (<button>7의 배수</button>) : (num % 10 === 0 ? undefined : <button>{num}</button>))} */}
      {
        arr.map(num => {
          if (num % 7 === 0) {
            return (<button key={num}>7의 배수</button>)
          } else if (num % 10 === 0) {
            return undefined
          } else {
            return (<button key={num}>{num}</button>)
          }
        })
      }
    </>

  )
}
```

--- 

## **Loop를 이용한 Rendering with key**

- for, map, filter, find Array의 프로토타입 함수로 여러가지 요소를 반복적으로 랜더링한다. 
  
- 여기서 생성되는 요소의 key값을 입력해야 하며, 입력 값은 고유 값이어야 한다. 
  - 사용목적 : React는 독립적인 요소의 렌더링을 하는데 key값으로 변화된 요소만 렌더링 하기 위해서
  - 배열의 key 값으로 index를 사용하면 안된다 이유는, 배열의 길이가 달라지면 요소의 key 값이 변화가 되어 side Effect 발생 할 수 있기 때문이다. 


--- 

## **EventHandler 사용하기**

- inline Event는 camelCase를 따른다 
- 전달 요소는 function이다. 
- 함수를 매개변수로 전달해야하며, 함수의 parameter를 받아 eventHandler 함수에서 사용 할 수 있다. 
- event 객체를 제외한, 고차원 함수로 매개변수를 받아 사용 할 수 있다. 

```js 
import React from 'react'

const arr = Array.from(Array(100), (_, i) => i + 1);

export default function EventHandle() {

  const buttonClick = (param, e) => {
    // console.log(el)
    // alert(el.target.innerText);
    alert(param);
  }

  const buttonClick2 = (param) => () => { alert(param) }
  const buttonCliick = (param) => {
    const a = 10
    return ()=>{
      // 여기서 closure 개념이 나온다.
      // 전자의 함수가 리턴을 했음에도 불구하고, 하위 함수에서 a값을 참조하여, a의 메모리가 유지 되는 상태를 closure 라고 한다.
      alert(param + a);
    } 
  }

  return (
    <>
      // inline 함수
      {/* {arr.map(el => <button onClick={() => alert(el)} key={el}>{el}</button>)} */}
      // parameter로 값을 받아 사용
      {/* {arr.map(el => <button onClick={(e) => { buttonClick(el, e) }} key={el}>{el}</button>)} */}

      // 고차원 함수로 매개변수 받아 사용하는 내용
      {arr.map(el => <button onClick={buttonClick2(el)} key={el}>{el}</button>)}
    </>
  )
}

```

---