# TS Compiler

### Compilaltion Context

_컴파일 할 파일이나 컴퍼넌트의 모음을 말하고, 어떠한 컴파일러의 옵션 적용 및 정보를 포함하고있는 파일이 tsconfig.jsob 파일이다._

### 최상위 root Options

- 취상위 프로퍼티

  - compileOnSave
  - extends
  - compileOptions
  - files
  - include
  - exclude
  - reference

  **compileOnSave**

- 파일을 컴파일 하면 파일을 저장 여부의 기능 옵션
- true / false
- Visual 2015, TS 1.8.4 이상, atom-typescript 플러그인

  **extends**

- 상속을 받아올 부모 속성 파일의 경로를 설정해준다.
- json 파일 형식의 부모 속성을 가져온다.

**files, include, exclude**

- 어떤 파일의 어떻게 컴파일 할지 설정한다.
- 위의 해당 옵션이 없으면 모든 파일을 컴파일 할려고한다.
- files > exclude > include
- files
  - 컴파일 파일을 설정한다,
- include
  - exclude 보다 약하다
  - \*같은걸 사용하려면, .ts / .tsx 만 include
  - 파일의 포함 범위를 설정한다.
- exclude

  - 파일의 제외 파일을 설정한다.
  - 설정하지 않으면 node_modules, bower_component, jspm_package, \<outDir>을 default로 제외합니다.

---

### Types

_typeOptions는 프로젝트에서 사용하는 lib에 type를 정해주는 역할을 한다._  
_JS에서 외부 lib를 사용할 수 있게 도와주는 역할을 한다._

**@tpyes**  
_외부의 lib을 사용하기 위해서 타입의 정의를 설정해준다._

**typeRoots**  
 _외부 lib 타입을 설정한 파일을 경로를 배열에 담아 설정해준다_

**types**

- 정의한 배열안의 type 선언한 package이름으로 찾아서 사용합니다.
- 빈 배열로 넣는 다는 것은 시스템을 이용하지 않겠다는 옵션입니다.

_상위의 typeRoots와 types는 같이 사용하지 않습니다!!_

### Target 과 lib

_target 어떤 런타입에서 실행되는지 알려준다._  
_기본적인 사용 lib type 정의가 되어있어야한다._  
_lib 최종 환경의 type을 정의해주고 실행가능하도록 도와준다._

**target**

- 컴파일 시 js의 언어를 선택해준다.
- 기본 : ES3
- 최종 브라우저에서 사용할 컴파일의 js의 언어의 버전 옵션을 정해준다.

**lib**

- 실행 환경에 있어서 js 내장 환경의 lib을 사용 내용을 정의한다.
- 배열의 값을 담아 정의한다.
- lib를 사용하지 않았을 때, target의 버전에 따라 지정한다.

_필요 설정만 사용하여 효율적인 프로젝트 환경을 구성하기 위해서 작성한다._

---

### outDir, outFile, rootDir

_컴파일시 필요시, 최상위 경로, ouput로 받을 폴더와, 파일 경로를 설정하는 옵션이다._

**outFile**  
_단일 파일로 아웃풋 파일을 설정하는 Option_

**outDir**  
_컴파일 최종 경로로 폴더 경로를 설정하는 Option_

**rootDir**

- 가상의 최상위 폴더를 설정합니다.
- 설정한 폴더의 경로를 똑같은 구조로 컴파일하여 결과 폴더에 똑같이구성합니다.

---

### Strict

- 엄격하게 tpye를 확인하는 option입니다.

**종류**

- --noImplicitAny :  
  명시적으로 any타입을 사용하여, any에대한 타입을 체크한다.

- --noImplicitThis:  
  명시적으로 않게 any타입을 사용하여 this를 사용하려면 에러를 발생한다.  
  this의 명시적인 타입을 설정하지 않으면 발생한다.  
  _class의 this를 사용하면 에러는 발생하지 않는다._

- --strictNullChecks:  
  모든 타입의 null, undeifined가 subType으로 사용되는 Option을 제한한다.  
  any는 null과 undefined를 가진다,void타입 경우 undefined를 가진다.

- --strictFunctionTpyes:  
  함수 타입에 대한 bivariant 매개변수 검사를 한다.  
  함수의 선언부에서만 검사를 하고, 객체의 메서드 부분에서는 검사하지 않는다.

  _즉, 함수의 매개변수의 대한 타입선언을 더욱더 확실히 한다는 옵션_

- --strictPropertyInitalization:

  - 정의되지 않은 클래스의 속성이 생성자에서 초기화 되었는지 확인하다.
  - 선언에 대한 값의 할당 여부를 확인한다.
  - 클래스에서 constuctor에서 값을 할당하면 에러는 사라진다.
  - constructor에서 값을 할당 하지 않는 경우 async를 사용 할 수 없다.

- --strictBindCallApply

  - 함수의 내장 함수인 bind/call/apply를 사용할 때 엄격하게 체크하는 옵션

- --alwaysStrict  
  각 소스 파일에 대해 JS파일로 내보낼 때 strict 옵션의 설정되어 분석하여 내보낸다.

---
