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

---

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

---

### Generic 함수와 Interface

- 기존의 작성 방식에서, 타입의 항목에, Generic으로 구현해준다.

  ```ts
  type helloFunc = <T>(msg: T) => T;

  const hello1: helloFunc = <T>(msg: T): T => {
    return msg;
  };

  interface IGeneric {
    <T>(msg: T): T;
  }

  const vGeneric: IGeneric = <T>(msg: T): T => {
    return msg;
  };
  ```

### Class의 Generic

- 클래스의 Generic은 클래스 레벨의 타입선언이 필요하다.

```ts
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}
```

### Generic Extends

- Generic의 Extends는 타입의 제한을 준다.
- 타입의 상속이 아닌, 타입을 제한하는 역할로 작용한다.

  ```ts
  class Person<T extends string | number> {
    private _name: T;

    constructor(name: T, age: K) {
      this._name = name;
    }
  }
  ```

---

### keyof Generic

```ts
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProp<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[keyof T]
): void {
  obj[key] = value;
}
```
