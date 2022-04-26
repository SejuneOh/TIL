# JS Class

## ECMA5 이전 클래스

_동일한 값, 혹은 함수를 가지고 있는 객체의 틀을 만들어 같은 동작을 반복하여 메모리 낭비를 방지 할 수 있는 방법_

_object를 만드는 틀을 만들어 생성할 수 있도록 할 수 있다._

```js
//생성자 함수
function User(first, last) {
  this.first = first;
  this.last = last;
}

//프로토 타입
// 통일화 해서 함수를 할당할 수 있다.
// 메모리에는 한번만 등록한다. -> 참조한다.
User.prototype.getFullName = function () {
  return `${this.first} ${this.last}`;
};

// 객체 생성
const simth = new User("look", "simth");
```

## ECMA6 이후 신규 클래스

_기존 클래스를 생성하는 방식이 업데이트 되었으며 아래와 같이 정의한다._

```js
// 상속의 확장

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);

// 있는 기능은 상속하고
//  새로운 기능은 확장하여 새로운 객체를 만든다.
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBycycle = new Bicycle("삼천리", 2);
const daughterBycycle = new Bicycle("세발", 3);

console.log(myBycycle);
console.log(daughterBycycle);

// 의미의 확장
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

const myCar = new Car("벤츠", 4, true);
const daughterCar = new Car("포르쉐", 4, false);
```

---

## THIS

- 자신이 호출 되어있는 상위 객체를 가르키는 키워드
- 기본 함수와 화살 함수의 this의 범위는 다르다.
- 기본 함수 : 호출 위치에 따라 this를 정의한다.
- 화살 함수 : 함수 범위에서 this를 정의한다.
