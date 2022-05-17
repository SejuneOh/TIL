# Hook

## Hook이란?
**Hook은 React 버전 16.8부터 React 요소로 새로 추가. Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.**

_클래스의 단점을 보안하면을 보완면서 라이플 사이클등과 함수를 재사용가능토록한다._



_Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수입니다._  

_Hook은 class 안에서는 동작하지 않습니다._  
_대신 class 없이 React를 사용할 수 있게 해주는 것입니다._  
_Hook에서는 병합이 아닌 값을 대치하는 형태로 관리한다._

--- 

## Hook의 사용규칙 

1. 최상위 레벨에서만 Hook을 호출해야합니다. 반복문, 조건문 중첩된 함수내에서 HooK을 실행하면 안된다.  

2. React 함수 컴포넌트 안에서만 Hook을 호출해야합니다. 일반적인 js함수 내에서 Hook을 호출해서는 안됩니다. 추가적으로 custom Hook에서 사용할 수 있습니다.


----

## Effect Hook

```txt 
사용 목적 : Effect Hook을 사용하는 목적은 함수 컴포넌트에서 sideEffect를 hook으로 관리 할 목적으로 사용한다.

값의 할당만이 아닌, 추가적인 state의 값의 사용되는 부분을 설정할 때, 사용한다.
```

- 사용 예시 : 데이터 가져오기, 구독, 수동으로 ReactDOM을 수정하는 것이 모두 사이드 effect이다.
-  useEffect는 컴포넌트 내부에서 호출이 되는데 이유는 다음과 같다
   -  컴포넌트의 state에 접근을 하여 부수적인 값으로 상태 값을 변경하기 위해서.  
-  첫번째 렌더링 이후 모든 모든 업데이트에서 수행합니다.
- class의 componentDidMount와 componentWillUnmount를 useEffect에서 한곳에서 처리한다.

  ```js
  import React, { useState, useEffect } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  ```

useEffect를 이용한 cleanup
- dependency arry 값을 통한, 업데이트가 가능하다.
- Effect가 발생했을때, return하는 곳에 clean-up 내용을 작성하여 사용 할 수 있다.
- dependency arry에는 의존성 요소를 다 넣어두는 것이 좋다. 성능의 최적화를 위해서 사용한다.
  
```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // props.friend.id가 바뀔 때만 재구독합니다.
```

## Custom Hook 

여러 훅을 모아서 자신만의 훅을 모아둔 함수로 보면된다,



### useLayoutEffect

