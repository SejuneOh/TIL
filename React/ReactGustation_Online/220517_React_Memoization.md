# Memoization

## Goals
1. Memoization 이란?

---

## **Memoization 이란?**

```txt
컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을
메모리에 저장함으로써 동일한 계산을 반복 수행을 제거하여 수행 속도를 빠르게 하는 기술
```


## 내용

1. React.memo는 HOC이다. 
2. memo를 사용하면 React는 컴포넌트를 렌더링핮 ㅣ않고 마지막으로 렌더링된 결과를 재사용한다.
3. 동일한 props로 렌더링 한다면, React.memo를 사용하여 성능 향샹을 누릴 수 있다.
4. props의 변화에만 영향을 준다
   1. Memoization 컴포넌트에서 props를 전달 받아 사용하면 문제 없음 
   2. useState, useReducer, useContext 훅을 사용한다면, 여전히 다시 랜더링 됩니다.
5. 렌더링 방지를 위해서 사용하면 안된다.


---

## Memoization 설정 단계 

### 1.컴포넌트 Memoization 

- 반복적으로 생성되고 계산이 되어있는(전달 props가 정해진) 컴포넌트에서 생성
```js
// 상위 list에서 지속적으로 생성해주는 아이템
  import React, {useMemo} from 'react';

  function  ContentItem(props){
    
    return (
      <>
        <span>{prop.title}</span>
        <span>{prop.content}</span>
        <span>{prop.likes}</span>
      </>
    )
  }

// 컴포넌트 Memoization
export default memo(ContentItems)
```


### 2.컴포는트 Memoization 성능 검사
- Profiler API를 통한 검사
- 렌더링하는 빈도와 비용을 측정합니다.
-  parameter : id / callback function
-  [ReactProfiler]("https://ko.reactjs.org/docs/profiler.html#gatsby-focus-wrapper") 에서 선언한 callback에서 필요 내용을 찾아 사용합니다.
```js
// 상위 list에서 지속적으로 생성해주는 아이템
  import React, {useMemo, Propfiler} from 'react';

// function Memoization(onClick)
  function  ContentItem(props, onClick){

    function callback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간 
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    // 렌더링 타이밍을 집합하거나 로그...
    console.log(`actualDuration:(${title}: ${actualDuration})`);
  }

  const handleClick = () => {
    onClick();  //부모요소에서 메모이제이션하여 전달한 callback함수
    setClickCount(prev => prev + 1);
    alert(`${title}눌림`)
  }
    
    return (
      <Profiler id="id" onRender={callback}> 
        <>
        <div onClick={handleClick}>
          <span>{prop.title}</span>
          <span>{prop.content}</span>
          <span>{prop.likes}</span>
          <span>{clickCount}</span>
        <div>
        </>
      </Profiler> 
    )
    
  }
```

### 3.callBack Function Memoization
```txt
이벤트나, callback함수를 props로 받는 경우, 혹은 memoization 한 컴포넌트에서 callback 함수가 생겨 상태가 변경되면, memoization이 진행되지 않는다 함수자체를 
Memoization하여  모든 요소가 랜더링 하는 것을 방지한다.
```

### 4. 값의 변화가 생긱 변수 useMemo 사용하기 
- 어떤 특정한 "값"을 저장하여 연산하고 useMemo를 사용해서 Memoization한다. 


```js 
import React, {memo, Profiler, useState, useMemo} from 'react';
import "./CommentItem.css";

 function CommentItem({title, content, likes, onClick}) {
   const [clickCount, setClickCount] = useState(0);
  
  
  ///생략
 

  // useMemo를 사용하여 리랜더링 방지
  // clickEvent가 발생할때마다,  rate까지 re rendering하는 것을 방지한다 
  const rate = useMemo(() => {
    console.log("rate Check");
    return likes > 10 ? "Good" :  "Bad"
  },[likes])
  

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
    <div className="CommentItem" onClick={handleClick}>
      <span>{title}</span>
      <br/>
      <span>{content}</span>
      <br/>
      <span>{likes}</span>
      <br/>
      <span>{rate}</span>
      <br/>
      <span>{clickCount}</span>
    </div>
    </Profiler>
  )
}

// Memoization
export default memo(CommentItem)
// export default CommentItem
```