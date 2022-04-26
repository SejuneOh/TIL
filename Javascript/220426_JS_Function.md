# JS Function(함수)

## Goals

1. 함수의 기본형
1. 화살표 함수
1. IIFE 즉시 실행함수
1. Hoisting
1. Timer function
1. CallBack Function

---

### 함수란?

_특정 연산, 로직을 호출 할 수 있도록 만든 블록 요소이다._

---

### 함수의 기본형

1. 기본형

```js
function functionNM(param1, param2) {
  // 실행 코드
}

// 함수의 호출
functionNm();
```

2. 익명함수  
   _이름 없는 함수로 변수에 담아 실행 가능하다_

```js
const a = function () {
  //실행코드
};
a();
```

---

### 화살표 함수

_반족적으로 호출 하는 경우가 아닌 한번의 실행만 필요할 경우 많이 사용한다._  
_실행문이 한 줄일 경우 축약해서 사용 가능하다 ._

```js
// 화살표함수
const data = (x) => {
  return x * 2;
};
// 축약형
const data_short = (x) => x * 2;
// 매개변수하 하나일때
const data_short2 = (x) => x * 2;
//객체는 ()로 한번 감싸서 사용한다.
const data_short3 = (x) => ({ age: 20 });
```

---

### 즉시실행함수 IIFE(Immediately-Invoked Function Expression)

_함수의 호출을 생성과 실행을 동시에 할 수있는 방식_

```js
function double() {
  console.log(num * 2);
}

// (익명함수)(); 형태로 실행 할 수 있다.
(function () {
  console.log(num * 2);
})();

// 마지막 갈호를 안에다 넣어도 실행된다.
(function () {
  console.log(num * 2);
})();
```

---

### Hoisting

다음 정리한 것을 참조하자 : [JS_System_Study](./220425_JS_System.md)

---

### Timer Function, CallBack Function

1. TimerFunction

_특정 시간의 이후 함수를 실행하거나, 특정시간을 가지고 바본적으로 함수를 실행 할때 사용하는 함수_

```js
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격 마다 함수 실행
// clearTimeout() : 설정된 timeout 함수를 종료
// clearInterval(); 설정된 interval 함수를 종료

const timer = setTimeout(() => {
  console.log("David");
}, 3000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  // timer 종료
  clearTimeout(timer);
});

const inter = setInterval(() => {
  h1El.addEventListener("click", () => {
    clearInterval(inter);
  });
}, 3000);
```

2. CallBack function

   _인자로 들어가는 함수를 CallBack Function라고 지칭하며, 함수의 실행 이후 비동기 적으로 함수가 호출까지 기달린 이후 실행된다._

```js
//함수를 인자로 받는다.
function timeout(cb) {
  setTimeout(() => {
    console.log("timeout!!!");
    // callBack 함수의 시점을 지정 할수 있는 방법
    cb();
  }, 3000);
}

// 익명함수에 인수로 들어간 함수가 실행 지점을 설정 할 수 있다.
timeout(() => {
  console.log("done");
});
```

---
