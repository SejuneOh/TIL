# TS Class

## Class란?

_일종의 설계도의 개념으로 다가가면, 내가 필요한 객체의 설계도를 작성하여, 필요 객체를 class를 통해서 만든다_

- 기존 obj의 생성은 function 통했지만, class를 통해서도 만들 수 있다.
- es6 이후 부터 사용 가능하다.
- TS에서는 클래스도 사용자가 만드는 타입이다.
- es6 이하의 버전의 class 생성은 기존의 obj 생성의 function으로 생성하게 된다.

---

### Class의 선언

```ts
class Person {
  name: string;

  // 생성자를 통해서 값을 전달한다.
  constructor(name: string) {
    this.name = name;
  }
}

// obj를 생성한다.
const p1 = new Person("Mark");

console.log(p1);
```

### class의 초기화 및 생성

- class의 선언만, 할당하지 않는 변수는 constuctor를 통한 생성자 할당 부분이 필요하다.

- 할당한 값의 선언은 생성자를 통한 값의 초기화 할당은 필요 없다.

- 타입의 체크 strict option을 설정 해야, 생성자 및 값의 할당 여부를 체크해준다.

- 변수 뒤 !를 설정하면, 생성자를 통해서 값을 할당 안 받아도 된다.

- !()를 선언 후 값을 할당하지 않으면, class와 런타임 시 생성된 obj의 타입이 깨진다.

```ts
class Person {
  name: string;
  age!: number;
  gender: boolean = false;

  // 생성자
  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("Mark");
```

- defualt 생성자  
  class의 할 당할 변수가 없으면 기본 생성자는 안보이지만 생성이 된다.

- class에서의 생성자 함수에서 변수를 할당 여부가 확실 하지 않으면 예외 조건을 맞춰서 값의 할당 코드가 필요하다.  
  왜냐하면, 할당 여부가 불확실 하면, 변수의 타입이의 범위가 넓어지기 때문이다.

```ts
class Person {
  name: string;
  age: number;

  // 생성자
  // age => number | undefined
  constructor(name: string, age?: number) {
    this.name = name;
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}
```

- 생성자는 async를 붙일 수 없다.

---

### class의 접근 제한자

- 기본적으로 TS는 public으로 외부에서 접근이 가능하다.
- private는 class 내부에서만 접근이 가능하다.  
  priavate 선언이 변수의 \_붙여 표현하기도 했다.
- protected 외부에서는 접근할 수 없지만 상속간의 접근이 가능하다.

### 생성자를 통한 초기화

- 변수의 선언와 생성을 초기화 생성자를 통해서 만들 수 있다.
- 초기화 함수를 통해서 변수를 선언하려면, 접근제어자를 통하여 생성한다.
- 생성자 함수의 property의 매계변수의 접근제한자와 타입의 정의는, 정의 및 할당을 동시에 해준다.

```ts
class Person {
  // 생성자

  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }
}
```

---

### Getter, Setter

- 변수의 값을 할당 및 값을 추출할 수 있는 방식이다.
- 클래스의 변수의 직접적인 접근 제한을 줄 수 있다.
- 데이터의 가공하여 값을 할당 할 수 있다.

```ts
class Person {
  // 생성자

  constructor(private _name: string, public age: number) {}

  get name() {
    // data의 가공이 가능하다.
    return this._name;
  }
  set name(n: string) {
    // data의 가공이 가능하다.
    // 값의 할당이 가능하다.
    this._name = n;
  }
}
```

### readonly

- 접근제한자 readonly 변수 선언 형태로 선언한다.
- 값을 읽기만 가능한 변수를 선언할 때 사용한다.
- 초기 설정의 주고 값의 변화가 필요 없을 때 사용한다.

### class 안에 index signatures

- 속성의 프로퍼티가 고정형태가 아닌 동적으로 변수의 이름이 들어오는 경우일 때 사용한다.

```ts
class Students {
  // 프로퍼티가 동적이라면,
  // [index: string]: 'male' | 'female'; 좀 더 자세한 타입 선언
  // 어떤 값이 이름이 올 수 있는데, 변수 이름의 타입고 값의 타입이 선언을 설정한다.
  // 타입의 선언으로 변수를 넣어줄 수 있다.
  [index: string]: string;
}

const a = new Students();

a.mark = "male";
a.jade = "male";
```

---

### static properties, method

- 객체의 생성으로 obj가 호출하는 방식이 아닌, class 자체에 method 및 변수를 class에서 바로 호출 할 수 있다.
- static 키워드를 붙여 공통적으로 사용하려는 목적으로 변수와 Method에 사용한다.
- 여러 instance가 같으 값은 메모리의 올라간 값을 본다.

```ts
class Person {
  public static hello() {
    console.log("hello");
  }
}

const p1 = new Person();

//static
Person.hello();
```

### Singleton Pattern

_Application이 실행하는 중간에, class로 부터 하나의 obj만 사용해서 구동하는 패턴_  
_왜 사용하는가?_

- 무분별한 new 키워드를 사용한 생성으로 메모리가 낭비를 막기위해서
- 하나의 생성된 instance는 재활용성이 높으며, 속도가 빠르다.
- 클래스간의 데이터 공유가 쉽다. 단, 같은 데이터의 동시접근이 발생한다.

**사용 방법**

- 클래스의 생성자 함수의 접근을 제한한다.
- 클래스의 생성자를 받아 올 수 있는 함수를 구현한다.
- 함수의 구현에서 생성자 함수를 호출하여, instance가 있을 때, 없을 때를 처리하여 리턴한다.

```ts
// singleton pattern

class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance() {
    // className로부터 만든 obj가 잆으면 리턴 없으면 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  // 어디서든 생성하는 것을 막는다.
  private constructor() {}
}

// 매계체를 통해서 class를 생성하는 함수를 호출 한다.
const a = ClassName.getInstance();
const b = ClassName.getInstance();\

```

---

### class의 상속

- extends 키워들 사용하여 클래스의 상속을 할 수 있다.
- 자식 클래스의 생성자 함수가 없으면 부모 클래스의 생성자 함수를 상속받는다.
- 자식 클래스의 생성자 함수를 만들면, 부모 클래스의 값을 할당하는 super를 먼저 호출하여 값을 할당하고, 자식에게 값을 할당한다.
- 상속간의 protected, private의 키워드를 접근할 수 있어, 접근에 변화에 주의하며 사용해야 한다.

```ts
class child extends Parent {
  // 생성자 함수가 없다면 부모의 생성자 요소를 상속받는다.
  // 변수의 override
  // public _name = "whoAmI";

  // 생성자 함수의 override
  // 부모의 생성자를 호출 해야한다.
  constructor(age: number) {
    super("whoAmI", age);
  }
  public gender = "male";
}

const p = new Parent("mark", 20);

const c = new child(30);
// p._name  접근이 불가능하다.
```

---

### Abstract Class

- 완전하지 않는 클래스를 표현하여, new를 통해서 생성 불가능하다.
- 상속을 통해서 완전한 객체를 만들 수 있다.
- 클래스의 이름과 기능이 완전하지 않는 요소에 abstract 키워들 붙여야 한다.
- 가상클래스의 선언 부분은 상속받은 클래스에서 구현을 해줘야 한다.

```ts
abstract class AbstractPerson {
  protected _name: string = "mark";

  abstract setName(name: string): void;
}

class Person extends AbstractPerson {
  setName(name: string): void {
    // do something
  }
}
```

---
