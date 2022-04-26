# JS(Java Script) 기초

## Goals

1. 데이터 타입
1. 산술, 할당 연산자
1. 비교 논리 연산자
1. 삼항 연산자
1. 조건문 (if, switch)
1. 반복문 for
1. 변수의 유호 범위
1. 형변환

---

### 데이터 타입

- 문자열

```js
typeof "hello world"; // 문자열
```

- Number

```js
// 숫자,실수 데이터 타입
typeof 123;
```

- boolean

```js
// 참 거짓
$ typeof true // flase
```

- undefined

```js
// 의미 없는 값이 할 당지 않았을 때 나오는 타입
typeof undefined;
```

- null

```js
// 의미가 있는 값을 할 당 하지 않을 때 사용하는 데이터 타입
typeof null;
```

- object( {}, [] )

```js
// 여러가지 데이터를 가지고 있는 뭉치의 데이터 타입, 배열도 object 타입에 들어간다.
const obj = {
  name: "Name",
  age: 10,
};
```

---

### 산술연산자

```js
const a = 10;
const b = 2;

console.log(a + b); // 덧셈
console.log(a - b); // 뺄센
console.log(a / b); // 나누기
console.log(a * b); //곱셈
console.log(a % b); //나머지 연산자
console.log((a += 1)); //a = a+1
console.log((b -= 1)); // b = b-1
```

---

### 비교 연산자

```js
const a = 10;
const b = 2;

console.log(a < b); // 숫자의 비교 후 true false 리턴
console.log(a > b);
console.log(a >= b); // 비교시 같은 경우 포함
console.log(a <= b);
console.log(a === b); // 데이터 타입과 값이 같은지 확인
console.log(a == b); // 데이터의 값만 비교
console.log(a !== b); // 데이터와 타입이 다르면 true를 리턴한다.
console.log(a != b);

console.log(true && true); // 2개의 조건이 모두 true일 때 true를 리턴한다.
console.log(false || true); // 2개 중 하나만 true여도 true를 리턴한다.
console.log(!true); // 조건의 반전되는 값을 리턴한다.
```

---

### 3항 연산자

```js
const num1 = 10;
const num2 = 20;
// 조건 ?  true 일때 리턴 값 : false 일때 리턴 값
const a = num1 > num2 ? true : false;
```

---

### 조건문

_조건을 걸어서 실행문을 분리한다._

_if 문_

```js
const a = 10;
const b = 20;

if (a < b) {
  // 실행문
} else if (a === b) {
  // 실행문
} else {
  // 실행문
}
```

_Switch 문_

```js
switch (조건) {
  case value1:
    // 실행문
    break;
  case value2:
    // 실행문
    break;
  default:
  // 실행문
}
```

---

### 반복문

_여려번 같은 반복을 할 때, 사용한다_

```js
for (let i = 0; i < 조건; i++) {
  // 반복해서 실행할 로직
}
```

---

### 변수의 유호 범위

해당 정리는 다른 파일에서 참조 : [JS System의 변수](./220425_JS_System.md)

---

### 형변환

JS에서 자동으로 형 변환이 일어나는데 다음 예시를 보자

- true와 같은 값  
  : true, {}, [], 1,2, 'false', -12
- false와 같은 값  
  : false, '', null, undefined, 0, -0, NaN
- NaN : 숫자 + 산술연산자를 했을 때 숫자가 아닐때 (Not a Number)

---
