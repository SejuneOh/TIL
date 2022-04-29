# TypeScript Basic

## Goals

1. TS vs JS
2. Primitive Type

---

### TS vs JS

| TS          | JS           |
| ----------- | ------------ |
| Static type | Dynamic type |

- Static type : 개발 시 오류를 찾아내고 수정할 수있다.
- Dynamic type : runtime 시 오류를 발생한다.

---

### Primitive Type

- obj, reference가 아닌 실제 값을 저장하는 자료형
- js에서 온 타입이기때문에 내장함수 사용하는것이 가능하다.
- 리터럴 값으로 서브타입으로 나타낼 수 있다.
- 타입 생성자를 만들면 object 형식으로 객체로 나온다

  ```js
  //  String, Boolean Number 을 타입으로 사용하면 안된다 .
  new String("World"); // obj 형식이다. 사용을 권고하지 않는다.
  ```

- Primitive Type
  타입 | 설명
  --|--
  boolean | true, flase의 값을 갖는다.
  number | 숫자 타입을 가지고있는 타입, 2진, 8진수 ,16진수도 포함
  string | 문자열 타입
  symbol(ES2015)| 고유하고 수정불가능한 값으로 만들어진다. 접근 제어하는데 쓰이는 경우가 많다.
  null | 의도성이 있는 값으로 아무것도 안들어있다는 내용
  undeifined | 의도성이 없는 값으로 아무것도 안들어있다는 내용

  - boolean

    ```ts
    let isDone: boolean = false;
    let isTrue: Boolean = new Boolean(false);
    // let isFalse: boolean = new Boolean(false);  래퍼 객체이기 때문에 타입이 맞지 않는다,
    console.log(typeof isDone);
    console.log(typeof isTrue);
    ```

  - number

    ```ts
    let decimal: number = 6;
    let hex: number = 0xf00d; //16진수
    let binary: number = 0b1010; //2진수
    let octal: number = 0o744; // 8진수
    let notANumber: number = NaN; //NaN
    let underscoreNum: number = 1_000_000; // 100만 을 알아보기 편하게 _를 사용하는 방식
    ```

  - string  
    _`` 기호를 사용한 template String형식을 사용할 수 있다._

  - symbol(ECAM2015에 추가)

    - 함수로 사용할때는 대문자 Symbol, 타입으로 사용할 때는 소문자 symbol로 사용한다.

    ```ts
    console.log(Symbol("foo") === Symbol("foo")); //false가 나옴

    const sym = Symbol();
    const obj = {
      [sym]: "value", // 상단에 선언된 sym을 가져와 객체의  key로 잡음
    };

    obj[sym] = "data"; //접근 방식

    console.log(obj[sym]);
    ```

- null & undefined

  - config 설정하지 않으면, 모든 타입에 서브타입으로 들어간다.
  - 다른 타입의 null, undefined에 들어가지 않도록 해야한다.
  - void는 예외적으로 할당이 가능하다.
  - 다른 타입의 서브타입으로 사용하기위해서 union type으로 설정한다.

    ```json
    /*tsconfig.json 파일의 설정이며, nul, undefined를 서브타입으로  사용 못하게 하는 설정이다*/
    "strict": true,
    ```

  - union type

    ```ts
    // let str: string = undefined; //null 값을 서브타입으로 설정 불가능하다
    let v: void = undefined;
    let union: string | null = null; //uniontype
    ```

---

- **Reference Type**

- Obeject

  - object 타입은 리터럴로 생성되지 않는다.
  - object 타입은 js의 {}의 객체 obj 타입을 명시하지 않는다.
  - object 타입은 primitive 타입을 제외한 모든 타입을 명시한다.
  - union 타입으로 obeject를 타입을 설정하여 primitive 타입의 값 할당을 제한할 수 있다.

    ```ts
    //object 타입이 아니다.
    const person1 = { name: "mark", age: 20 };

    // obj 전역객체를 사용해서  생성한다. 여기서 param으로는 obj 타입으로 들어가야한다.
    // 여기서 obj 타입은, primitive를 제외한 타입을 들어가야한다.
    const person2 = Object.create({ name: "David", age: 10 });
    ```

- Array

  - 같은 타입의 자료형을 모아둔 것을 말한다.

    ```ts
    // 배열 타입 설정
    let list: number[] = [1, 2, 3, 4, 5];
    // 충돌 요소가 있어 사용하지 않는 것을 권고함
    let strList: Array<number> = [1, 2, 5, 5, 5, 5];

    // 여러가지 타입으로의 배열
    //  모든 타입이 숫자 혹은 문자열 타입으로 설정된다.
    let unionLs: (string | number)[] = [1, 2, 3, 4, "string"];
    ```

- Tuple

  - 튜플 타입을 이용해 원소의 수와 각 원소의 타입이 정확히 지정된 배열의 타입을 정의할 수 있다.
  - 항상 순서와, 타입, 길이도 맞아야한다.
  - 값의 타입과 길이가 명확한 여러가지 타입을 필요로 할 때 사용한다.

- Any

  - 어떤 타입이 와도 상관이 없는 타입이다.
  - Any의 제약사항은 거의 없고, 모든 타입을 포함해준다.
  - 어떤 표현만 하는 코드가 있다면, any 타입을 사용하는 것이 좋다.
  - 아무 곳 이나 any 타입을 사용하면, type의 변별성 및 안정성이 떨어진다.
  - 최대한 사용하지 않는 것을 핵심이다, 컴파일 타입 체크가 제대로 되지 않는다.
  - splict option에서 any를 사용할 때 명시하는 역할을 한다.

    ```ts
    let looselyTyped: any = {};
    // 안정성이 잃는다.
    const d = looselyTyped.a.b.c;
    ```

  - 무분별한 any의 사용으로 누수를 막는 방법

    ```ts
    function leackingAny(obj: any) {
      // const a = obj.num;
      const a: number = obj.num; //누수를 막는 방법
      const b = a + 1;
      return b;
    }

    const c = leackingAny({ num: 0 });
    ```

- Unknown

  - 모르는 변수의 타입을 묘사해야 할때 사용할 수 있다.
  - tpyescript 3.0 이후 부터 지원
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁힌다.
  - runtime error를 줄일 수 있을 것 같다.
  - any 보다 know을 사용하자

    ```ts
    declare const maybe: unknown;

    // typeGaurd
    // unkwon에서는 타입이 설정되는 부분이 생기면 타입을 선언해준다.
    if (maybe === true) {
      // 타입을 한정해준다.
      const aBoolean: boolean = maybe; // maybe => boolean
    }

    if (typeof maybe === "string") {
      maybe; // maybe ==> string
    }
    ```

- Never

  - return 에서 자주 사용한다.
  - 일반적인 return 형식으로는 never를 사용 할 수 없다. 단, 함수의 열려있는 상태? 혹은 타입을 제한할 때 사용한다.
  - 모든 타입의 서브 타입이다.
  - never에는 값을 할당 할 수 없다.
  - 잘못된 타입을 선언하는 것을 막을 때 사용한다.

    ```ts
    function error(message: string): never {
      throw new Error(message);
    }

    function fail() {
      return error("Failed");
    }

    function infiniteLoop(): never {
      while (true) {}
    }

    declare let tmp: string | number;

    if (typeof tmp !== "string") {
      // 할당 값이 있을 때아무것도 할당 할 수 없는상태
      // 할당 값이 없이 타입이 여러개 설정되며 , string을 제외한 number의 값을 할당 해줄 수 있다.
      tmp;
    }
    ```

- void

  - 어떤 타입을 가지지 않는 빈 상태를 의미한다.
  - 소문자로 사용한다.
  - 값을 반환하지 않은 undefined를 리턴할 때 사용한다.
  - 명시적으로 아무것도 안하겠다는 의미이다.
  - 유일하게 undefined만 값을 할당 할 수 있다.

    ```ts
    function returnVoid(msg: string) {
      console.log(msg);

      return;
    }

    // 변수의 할당하고 할 수있는 일이 없다.
    // undefined != void
    const r = returnVoid("리턴이 없다.");
    ```

---
