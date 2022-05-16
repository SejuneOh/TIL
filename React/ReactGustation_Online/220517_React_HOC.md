# HOC(고차컴퍼넌트) 

## Goals
1. HOC란 ?
2. 


## HOC란 ?

HOC(Higher Order Component)는 컴포넌트를 가져와서 새로운 컴포넌트를 반환하는 패턴으로
리액트의 구성적 특성에서 나오는 패턴이다.

_인자로 컴포넌트를 받고, 리턴을 컴포넌트를 한다, 기능을 붙여서 새로운 컴포넌트를 반환한다 고차 함수와 같은 방식이다._


### **설명**

- 컴포넌트의 공통되는 로직을 붙이거나 할 때 사용한다. 
  
- 원본 컴포넌트의 변경이 아닌 기능 확장성을 목적으로 사용한다.
- HOC에서 사용하는 props만 사용 후, props는 그대로 다시 전달해서 리턴한다.
- 간단한 디버깅을 위한 디스플레이를 표시해라
- render 안에서는 고차 컴퍼넌트를 사용하지 말아라
  - render에서 계속 컴포넌트가 생성되면서, 성능적으로 문제가 생긴다.
- ref는 전달하지 않는다(props가 아닌 key와 같은 내용으로 전달이 불가능하다.)


---

사용방법 순서

1. 공통된 기능을 사용하는 컴포넌트들이 발생한다. 
    ```js
    <!-- Button.jsx -->
    export default function Button() {
      const [loading, setLoading] = useState(false);
      
      useEffect(() => {
        const timer = setTimer(()=> {
          setLoading(true)
        }, 3000)
      }, [])
      
      return (
        {loading ? <p>Loading...</p> : <button> Button</button>}  
      )
    }

    <!-- Input.jsx -->
    export default function Input() {
      const [loading, setLoading] = useState(false);
      
      useEffect(() => {
        const timer = setTimer(()=> {
          setLoading(true)
        }, 3000)
      }, [])
      
      return (
        {loading ? <p>Loading...</p> : <button> Button</button>}  
      )
    }
    ```
2. 공통된 기능을 HOC컴포넌트로 컴포넌트를 만든다.
   
    ```js
    <!-- hoc.jsx -->

    <!-- compoent를  인자로 받는다 -->
    export default function hoc(Component){
      <!-- return할 컴포넌트를 변수로 생성 및 props를 전달 받는다.. -->
      const HOC = (props) => {
        <!-- 전달 받는 컴포넌트를 다시 린턴한다. -->
        return <Component/>
      } 

      return HOC
    }
    ```
  3. 공통된 기능을 hoc에 추가한다.
  
  ```js
  export default function hoc(Component){

    const HOC = (props) => {

      const [isloading, setIsloading] = useState(false);
      
      useEffect(() => {
        timer = setTimeout(() => {
          setIsloading(true);
        }, 3000)

      }, [])
      
      return (
        // 컴포넌트 자체dml props와 컴포넌트를 넘겨준다.
        {isLoadinig ?  <p><Loading/p> : <Component {...props}/>}  
      )
    }

    return <HOC/>
  }


  ```

  4. 필요 컴포넌트 export를 hoc 컴포넌트에서 출력한다.

```js 
<!-- Button.jsx -->
function Button() {
  return (
   <button> Button</button>
  )
}
export default hoc(Button)

function Input() {
  return (
   <input> Button</input>
  )
}
export default hoc(Input)
```

---
   