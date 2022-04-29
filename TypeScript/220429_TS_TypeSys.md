# Type System

## Goals

1. 작성자와 사용자의 관점으로 바라보기
1. Structual Type System vs Nomial Type System
1. 타입의 호환성
1. 타입의 별칭

---

## Type System이란?

- 컴파일러에게 사용하는 타입을 명시적을 지정하는 시스템
- 명시적으로 타입을 선안하지 않으면 컴파일러가 타입을 추정하는 시스템

### 작성자와 사용자의 관점으로 바라보기

- funtcion을 기준으로 사용자와 구현자의 입장을 생각해보자.

  - JS의 함수에서는 변수의 타입의 없어 사용자 입장에서는 값을 추론하고 사용하게 된다. 예외의 값이 나올 수 있다.

  - TS에서는 타입을 추론을 하되, 판단이 되지 않으면 Any 타입으로 추론한다.
    - 위의 해당 사항을 방지하기 위해서 noImplicitAny Option을 사용해서 실수를 줄인다.
  - 만약 함수의 매개변수를 제외하고 리턴값을 명시해주지 않으면, 리턴 값은 해당 리턴값을 바라보고 타입을 추론한다.
  - 추론된 데이터 값이 잘못 나와 undefined라도 함수에서 추론된 타입으로 덮어 써버린다.
    - 해당 내용을 방지하기위해서는 strictNullChecks option을 켜서 서브타입으로 null, undefined를 사용 할 수 없도록 해야한다.
  - 나만의 타입을 만들어 타입을 명명할 수 있다.(interface, type, class)

_즉, 변수의 타입, 리턴의 타입, 매개변수의 타입을 명명하여 정확하게 작성하는것 을 목표를 둬야 한다_

---

### Structual Type System vs Nomial Type System

#### Structual Type System

- 구조가 똑같은 타입인 경우 같은 타입으로 판단한다.
-

```ts
// 타입 생성
interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

// 타입 생성
type PersonType {
  name: string;
  age: number;
  speak(): string;
}

let personInterface: Iperson = {} as any;
let personType: PersionTpye = {} as any;

//  같은 타입으로 추론한다.
 personInterface = personType;
 personType = personInterface;

```

#### Nomial Type System

- C, JAVA
- 아무리 구조 형태가 다르면, 명명하는 이름이 다르면 타입이 다르다.
- TS는 해당 형식은 따르지 않는다.

#### duck typing

- ***

### 타입의 호환성

- subType

  - 타입의 종속관계에 있어서 하위의 값에 상위틔 값을 넣을 수 없다.

  - any 타입은 종속관계에 상관없이 값을 할 당 할 수 있다.(예외적인 상황)
  - 클래스의 상속관계에서도 자식 클래스에 값에 부모의 타입을 할당 할 수 없다
  - 같거나 서브타입인 경우 할당이 가능하다. (공변)
  - 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다.(반병)
    - 함수의 매개변수의 타입이 반병으로 자손관계끼리는 상관없지만 자손의 하위의 관계와는 성립되지 않는다. (옵션을 주었을 때)

```ts
let sub1: 1 = 1;
let sup1: number = sub1;

sub1 = sup1; //Errror 발생
```

---

### 타입의 별칭

- primitive, union, tuple, function의 타입의 별칭을 주는 방식
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것이 아니다.

**Aliasing Primitive**

```ts
type MyStringType = string;
const str = "hello";
let mystr: MyStringType = str;
```

**Aliasing Union Type**

```ts
type StrOrNum = string | number;
const str = "hello";
let mystr: StrOrNum = str;
```

**Aliasing Tuple Type**

```ts
type personTuple = [string, number];
let mystr: personTuple = ["david", 20];
```

**Aliasing Function**

```ts
type EatType = (food: string) => void;
```

- 목적이 뚜렷할 경우 interface를 사용하고
- 명명하는 이유로만 사용하는 것이면, alias를 사용한다.

---
