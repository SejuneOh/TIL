# Composition(합성) 

## Compositon vs Inheritance

합성과 상속을 비교하여 React에서 상속보다는 합성을 위주로 사용하는 방법을 알아보자


---

### Composition?

**_React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간의 코드를 재사용하는 것을 말한다._**

#### 컴포넌트안에 컴포넌트 담기

- 다른 컴포넌트를 담아 사용할 수 있다. 
  
- 다른 컴포넌트를 사용할 때  props를 사용해서 인자를 받아 컴포넌트에 사용한다.
  
- 어떤 값이 들어올지 몰라 props의 children 인자를 사용해서 자식 엘리먼트를 출력하는 것이 좋다.
- Composition은 클래스로 정의돈 컴포넌트에서도 동일하게 적용됩니다.
- props 와 합성은 명시적이고 안전한 방법으로 컴포넌트 모양과 동작을 커스텀 할 수 있다. 
- 컴포넌트의 props는 원시 타입, 엘리먼트, 함수 등 어떠한 props로 받을 수 있다.

```js
// WelcomeDialog.jsx
export default function WelcomeDialog() {
  return (
    <CustomDialog title='Welcome' description="Thank you"></CustomDialog>
  )
}

// CustomDialog.jsx
export default function CustomDialog(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </div>
  )
}
```



---


- 예시 코드

부모 컴포넌트에서 자식 컴포넌트를 리턴하는데 props를 이용하여 형태와 움직임을 변화를 준다.


```js 
// Parent.jsx
import React, { Children } from 'react'
import ChildComponent from './ChildComponent'

export default function PrarentComponent() {
  return (
    <>
      <ChildComponent
        title="Welocome Dialog"
        description="this is description"
        button={<button style={
          {
            backgroundColor: "blue",
            color: "white",
          }
        }>Props close Button</button>}>

      </ChildComponent>
    </>
  )
}

```


```js
// Child.jsx
import React, { useState } from 'react'

export default function ChildComponent(props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div
        style={
          {
            position: "absolute",
            zIndex: 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: '1px solid black',
            padding: "24px",
          }
        }>
        {typeof props.title === 'string' ? (<h1>{props.title}</h1>) : props.title}
        {typeof props.description === 'string' ? (<h5>{props.description}</h5>) : props.description}
        {typeof props.button === 'string' ? (<button style={{
          color: "white",
          backgroundColor: "red",
        }} onClick={() => setIsOpen(false)}>Close</button>) :
          (
            <div onClick={() => setIsOpen(false)}>
              {props.button}
            </div>
          )}
      </div>}
      {isOpen && <div style={
        {
          position: "fixed",
          backgroundColor: "lightGray",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
        }
      }>
      </div>}

    </>
  )
}

```

---