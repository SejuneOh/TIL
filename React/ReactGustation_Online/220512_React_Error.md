# Error 다루기

## Goals

```java
try{
  //error 발생코드
}catch(error){
  //error 발생 시
}finally{
  // 마지막으로 처리하는 부분
}
```

_java의 error 관리하는 부분을 React에서는 어떻게 관리할까 ?_

### ErrorBoundary lib

_ErrorBoundary lib를 사용해서 에러 발생 시 화면을 어떻게 그려줄 수 있는지 설정 할 수 있다._

- Class Component를 만들어야한다

- React.Component를 상속받은 클래스를 받아서

- Error를 받았을 때, 그릴 수 있는 화면을 그려준다.

- why class? Error를 났을 때 처리하는 컴퍼넌트는 클래스 컴퍼넌트에서 처리하기 때문이다.

- 부모와 자손관계에서 부모는 그리고 자식의 요소의 error 검사를 한다.

```js
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFormError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>There is some error...</p>;
    }
    return this.props.fallback;
  }
}
```

---
