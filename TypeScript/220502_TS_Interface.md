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

- 구조적으로 다른 인터페이스의 상속을 받아 객체를 구현한다.
- 같은 구조의 추가적인 타입이 필요할 때, 상속으로 타입 속성을 추가할 수 있다.

```ts
interface IPersion {
  name: string;
  age?: number;
}

interface IKorean extends IPersion {
  city: string;
}

const koeran: IKorean = {
  name: "david",
  age: 20,
  city: "korea",
};
```

**function Interface**

- 인터페이스의 함수를 설정하였을 때, interface의 타입의 변수에는 같은 형태의 함수가 선언되어야 한다.
- 인터페이스의 타입 체는 변수에 인터페이스를 할당 할 때, 변수가 함수를 호출 할때 타입의 비교 시점이 다르다.

```ts
interface HelloPerson {
  (name: string, age?: number): void;
}
// age? 값을 age로 사용 할 수 없다. 왜냐하면, age의 타입은 optional로 인한  number | undefined로
// 타입의 범위가 달라서, 타입을 설정 해줘야다 한다.
const helloPerson: HelloPerson = function (name: string, age?: number): void {
  consoloe.log(`안녕하세요 ${name} 입니다.`);
};
```

**ReadOnly Interface**

- 인터페이스 속성 값이 변화가 필요 없이 읽기만 원한다면 readonly 키워들 사용한다.

```ts
interface Person {
  name: string;
  age: number;
  readonly gender: string;
}

const man: Person = {
  name: "mark",
  gender: "male",
};
// 에러가 발생한다. reaonly 속성은, 읽기 전용인다.
man.gender = "female";
```

**Type alias vs Interface**

- function의 생성의 차이점

```ts
type EatType = (food: string) => void;

interface IEat {
  (food: string): void;
}
```

- arry의 차이점

```ts
type tArray = string[];

interface IArray {
  [index: number]: string;
}
```

- 교차 상속(여러가 타입을 상속 받을 때)

```ts
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistData {
  artist: { name: string }[];
}

type ArtistResType = ArtistData & ErrorHandling;
interface IArtistResType extends ArtistData, ErrorHandling {}
```

- union type

  - type alias에서는 같은 | 기호를 써서 union 타입을 쓰면된다.
  - 하지만 interface와 class 에서는 상속이 불가능 하다.

- Declaration Merging Interface
  - 같은 이름으로 선언된 여러개의 인터페이는 자동으로 합쳐진다.(선언 속성도 합쳐진다.)
  - type alias는 불가능하다. (Duplicate indentifier Error)
