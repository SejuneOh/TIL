# Portal


## Goals
1. Portal? 
2. 사용방법 

## Portal? 

DOM 계층 구조 바깥에 DOM 노드로 자식을 렌더링하는 최고의 방법

why? 

```txt
부모 컴포넌트에 overflow: hidden이나 z-index가 있는 경우이지만, 시각적으로 자식을 “튀어나오도록” 보여야 하는 경우도 있습니다. 예를 들어, 다이얼로그, 툴팁과 같은 것입니다.
```

- 포탈이라도 이벤트는 기존 root의 event가 버블링이 된다.


## 사용방법

1. index.html에 portal 추가하기 

```html 
<div id="portal"></div>
```

2. portal이 필요한 컴포넌트에서 portal 객체 만들기 

```js
const Portal = (props) => {
  return createPortal(props.chidren, document.getElementById("portal"))
}
```

3. 필요 컴포넌트 사우이 부모 요소로 감싸기

```html
 <Portal>
  <ThankyouDialog/>
</Portal>
```

4. portal 속서에 맞는 position 설정하기

---