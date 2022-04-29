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

---

### Structual Type System vs Nomial Type System

---

### 타입의 호환성

---

### 타입의 별칭

---
