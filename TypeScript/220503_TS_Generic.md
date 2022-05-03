# Generic

### Generic vs Any

_함수의 변수와, 리턴 타입은 다르지만 같은 형태로 반복적이 함수를 머지할 때 Any type을 쓸 수 있다._  
_하지만 Any는 타입의 추론으로 원하지 않는 타입의, 리턴 값으로 사용 될 수있는 가능성이 있어 Generic을 사용한다._

- Any는 함수의 매개변수와 리턴 타입의 서로의 관계가 없어 리턴 값의 추론이 불가능하다.

- Generic은 변수와 리턴 타입 매개변수의 타입의 영향을 준다.
- Generic에 의한 type의 로직이 연산이 가능하게 된다.

```ts
function hello<T>(msg: T): T {
  return msg;
}

// 문자열의 타입의 리턴이 아니라, Mark타입으로 추론한다.
// 리턴하는 상위의 타입의 내장함수를 사용할 수 있다.
const a = hello("Mark");
```

### 작성방식

- 호출시에 Generic의 타입을 지정할 수 있다.
- Generic 함수 호출 시, 호출할때의 타입을 추론하여 사용한다.

```ts
function callGeneric<T, U>(msg: T, comment: U): T {
  return msg;
}

callGeneric<string>("문자열"); // "문자열"의 타입을 갖는다.
callGeneric<number>(2022);
```

### Generic의 Tuple, Array

- 매개변수의 배열로 받기
- 배열의 타입이 여러개의 타입으로 들어올 경우, union type을 갖는다.
- 여러개의 타입으로 리턴하는 함수에서, tuple로 정의한 함수로 타입을 확실하게 한다.

  ```js
  // 배열의 타입이  여러개의 타입으로 들어올 경우, union type을 갖는다.
  function func<T>(msg: T[]): T {
    return msg[0];
  }

  function functTuple<T, K>(msg: [T, K]): T {
    return msg[0];
  }

  // string | number : union type
  func("a", 20);
  ```
