# Html과 JS 

## Goals
1. JS의 컴파일 및 시스템 이해 
1. 간단한 JS를 이용한 html 변경
1. Front_End와 Back_End의 시스템 이해
    1. 간단한 서버만들기 
1. Html sementic markup
    1. Outliner
1. html 개발 시 우선순위 


--- 


### JS(Javascript의 이해)

-Interpreter Language란 ? <br/>
_컴파일 언어의 반대의 개념으로 컴파일러가 있어 언어를 해석하는 개념이 아닌,_<br/>
_프로그램 구동 시 언어를 즉시 읽으면서 구동하는 방식의 언어를 말한다._

-JS System<br/>
1. JS코드(변수 반복문) UTF-8 2진수 형태로 저장 
1. 저수준 언어로 변환 <br/>
    1. 토큰처리 : 자신만의 규직으로 이해할 수 있는 언어처리<br/>
    1. AST : 어셈블러 언어로 이해할 수 있는 의미 부여 처리<br/>
    1. 어샘블러 : 어셈블러 언어를 통해서 머신코드로 변환
1. 머신코드로 변환
1. CPU 연산처리 요청
1. 프로그램 구동<br/>


_위와 같이 JS또한 메모리의 변환의 연속으로 JS를 읽은 엔진을 통해서 구동된다._

---

### 간단한 JS를 이용한 html 변경

_간단한 소스로 버튼 이벤트를 사용해서 html 변경을 해보자_<br/>
_html와 javascript의 속성및 함수의 이해도를 알 수있는 목차이다_
<br/>
<br/>

```html
<!-- script -->
<script>
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const pEl = document.querySelector('p');

buttonEl.addEventListener('click', doWork);

function doWork() {
  pEl.textContent = inputEl.value + '님 안녕하세요';
}
</script>

<body>
  <input type="text"/>
  <button>확인<button>
  <p></p>
</body>
```

- JS같은 경우 Window(browser)가  html로 DOM을 만들면서 JS구문이 해석 될 때 실행된다. 
- 실행되는 JS문장에서 addEventListener는  내부 함수처럼 객체를 생성할 때 상속 받은 함수를 사용할 수 있다.<br/> 하지만 실제 객체의 내용을 보면 함수 내용은 없지만 상속받은 조상의 함수를 가져와 사용한다.
- document.querySelector는 해당 tag의 첫번 째 Element를 가져온다. Element의 주소를 찾는다.
- addEventListener('event', function)으로 이벤트 발생 시 해당 코드의 함수가 실행된다.

_정리: JS에서도 DOM의 Element요소를 찾아 메모리에 접근하여 html을 수정할 수 다는 이해가 목적이다._



---