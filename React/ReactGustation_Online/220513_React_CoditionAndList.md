# Codition And List

## Codition Rendering

**_컴포넌트를 랜더링할 때, 조건에 맞는 요소를 랜더링하는 방식을 말한다._**

- if 조건 
- && 연잔사를 통한 조건 
- 삼항 연산자를 통한 조건
- js에서 사용하는 조건 연산에를 통해서 랜더링하는 요소를 컨트롤 할 수 있다. 

```js
function UserGreeting(props) {
  // boolean으로 감싸면, false를 의미하는 0이 아닌, false일 때만,  반환한다.
  // 혹은 3항 연산자를 통해서 정확한 값을 표현하도록 한다.
  // && 연산자는 condition && value condition의 값일 때 뒤의 값이 사용된다. 
  // 다른 값일 경우 원시적인 값을 보여준다.
  return <h1>{props.name && props.name + ','} Welcome {Boolean(props.count) && `it's count : ${props.count}`}</h1>
}

function GuestGreeting(props) {
  return <h1>Please Sign up!!</h1>
}

function Greeting(props) {

  return props.isLoggedin ? <UserGreeting name="timmy" count={0} /> : <GuestGreeting />;
}

```


--- 


## List

- Array, React에서 배열을 엘리먼트 리스트로 만드는 방식은 이와 거의 동일 합니다
- Element를 list로 받아서 사용할 때, key(유일한 값)을 입력해야한다.
- key 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 값이다.
- 고유한 문자열 값을 쓰는 것을 권고하고, 없을 시 index값을 key 값으로 사용 권고한다.
- list의 elment를 생성시점에 key를 넣어줘야 한다. 
- 형재사이에서만, 유일성을 확보하면 된다.

### Key

- key 값은 react list 요소의 랜더링 시점에 key값을 넣어줘야한다.
- key값을 주지 않을 경우 default 키값으로 index를 사용한다. : Warning 
- Props로 요소로 전달되지 않으며, 식별 값으로만 사용한다. 
- props 다른 값으로 받아서 사용 할 수는 있다. 

```js
import React from 'react'

export default function List() {
  const todos = [
    { id: 1, text: "data1" },
    { id: 2, text: "data2" },
    { id: 3, text: "data3" },
    { id: 4, text: "data4" }
  ];

  const TodoItems = (props) => {
    return (
      <li>{props.text}</li>
    )
  }

  // key는 컴포넌트에 props로 전달하지 않는다.
  // 식별하는 용도이다.
  const todoList = todos.map((todo) => <TodoItems key={todo.id} {...todo}></TodoItems>)

  return (
    <>{todoList}</>
  )
}

```