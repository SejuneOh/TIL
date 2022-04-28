# JS 데이터 실습

## Goals

1. import, export
1. lodash 사용법

---

### import, export

- import : 외부의 js파일을 가져울 수 있는 하나의 경로가 있다

- export :

  - default export : 이름의 지정 없이 data를 내보낼 수 있다.
  - named export : 이름을 지정해서 data를 내보내야한다.

- default export
  - 하나의 데이터만 내보낼 수 있다.

```js
//getTpye.js
export default getType(){
  //실행문
}
```

```js
// another.js
import getType from "filePath";

getType();
```

- named export
  - 여러개의 데이터를 내보낼 수 있다.
  - as 키워드를 통해서 원하는 이름으로 변경해서 사용할 수 있다.
  - default와 named export 두가지 모두 사용할 수 있다.

```js
//getType.js
export getType(){
  //실행문
}

export const user  = {age:20, name:'david'}

```

```js
//namedExport.js
import { getType, user as anotherName } from "./getType.js";

console.log(getType());
console.log(user);

// 한번에 데이터를 모두 가져오는 방법이고 wildcard에 모든 데이터를 가져온다.
import * as R from "./getType";

console.log(R.getType());
console.log(R.user);
```

- export, import 구조
  ![exportImport](../resource/exportImport.png)

---

### lodash 사용법
