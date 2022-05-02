# TypeScript Interface

## Goals

---

### Interface?

- 일반적으로 타입체크를 위해 사용되며, 변수, 함수, 클래스에서 사용된다.
- 기존의 타입을 조합하여 새로운 타입을 선언하는 것과 유사하다.
- ES6에서는 지원 하지 않지만, TS에서는 지원한다.
- TS 컴파일시에서만 사용한다.
- 인스턴스를 생성할 수는 없고, abstract 키워드도 사용하지 않는다.

_즉 추상적인 타입을 설정하여, 외부적으로 표현하여 사용하지만, 내부적인 코드로는 보이지 않는다. 타입을 만들어 추상적으로 사용할 때 만든다._

```ts
interface Person {
  name: "Mark";
  // 해당 타입의 객체에 해당 요소고 있을 수 있고 없을 수 있다 라는 것을 표시한다.
  age?: 20;
}
```

**Value Interface Optional Property**

```ts
interface test {
  name: string;
  // age라는 속성을 가지고있어도 되고 없어도 된다는 옵션이다.
  age?: number;
  // 어떠한 이름으로 값을 설정해도 괜찮다는 의미이다.
  [index: string]: any;
}
```

**function in interface**

_함수가 있는 interface를 설정하는 방법_

```ts
interface Person {
  name: string;
  age: number;
  hello(): void;
}

const p1 = {
  name: "David",
  age: 22,
  // hello: function(): void{};
  // hello(): void{};
  hello(): void => {/*this를 사용사 global this를 사용한다.*/};
}
```

1. 함수를 정의해서 사용하는 방식
1. property 이름으로 함수를 정의 할 수 있다. + 화살표 함수로도 표시 가능하다.

---

**Interface로 Class 구현하기**

```ts
interface IPerson {
  name: string;
  age?: number;
  hello(): voide;
}

// interface로 class 구현하기
class Person implements IPerson {
  // interface의 설정한 내용을 정의를 해줘야한다.
  name: string;
  age?: number | undefined;

  // 생성 시 초기화를 위한 설정을 해줘야한다.
  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    throw new Error();
  }
}
```

**Interface의 상속**
