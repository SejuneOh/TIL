# Html과 JS 

## Goals
1. JS의 컴파일 및 시스템 이해 
1. Front_End와 Back_End의 시스템 이해
    
1. 간단한 JS를 이용한 html 변경 및 서버로 시스템 이해하기
    1. HTML 과 DOM
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

### Front_End와 Back_End의 시스템 이해

1. 사용자의 Browser 화면 요청 (URL, PORT, QUERY)
1. Server에서 최초 페이지(index.html) 전송
1. browser html 렌더링 
1. 화면의 html 구성 시작
1. html 구문 외 만났을 때, 다시 서버에 js, css, img 다운로드
1. js 엔진 언어 해석 시작
1. 화면 구동. 

_server는 html의 페이지와 정보를 전달하고 받을 수 있도록 하는 역할이다._</br>
_client(front_end)는 서버의 데이터를 받아 사용자의 화면에 뿌려주고 꾸며주는 역할을 한다_</br>


---


### 간단한 JS를 이용한 html 변경
<br/>

#### HTML 과 DOM의 이해

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
<br/>


### Node.js
_node.js는 js가 사용될 수 있는 환경이 browser에서 os에서도 browser 없이 사용 할 수 있도록_ <br/>
_구글에서 만든 어디서든 js를 구동할 수 있도록 만든 framework다. 서버에서도 많이 사용된다._

```javascript
const http = require('http');
const fs = require('fs');
function mySet(req, res) {
  let url = req.url;

  if (req.url === '/') {
    url = '/index.html';
  }

  if (req.url === '/about') {
    url = '/about.html';
  }
  res.writeHead(200);
  var htmlFile = fs.readFileSync(__dirname + url);
  res.end(htmlFile);
};
var app = http.createServer(mySet);
app.listen(8080);
```

위와 같이 간단한 화면 전환 내용도 js로 만들어서 구동시킬 수 있다. 
- /는 최상위 위치를 말한다.




---

### HTML SEMENTIC MARKUP

html의 구성은 w3c의 권장하는 Sementic mark업의 기준을 따르자.<br/>
과거의 div가 화면의 여역을 나누는 모든 부분이었다면, 현재는 화면의 구성을 <br/>
의미 있는 tag로 구성하여.  유지 보수 및 html 구성의 완성도를 높일 수 있다. <br/>

- Sementic Markup을 해야하는 이유 중 Outliner!!! <br/>
검색엔징에서 내 사이트가 빠르고 비지니스 적으로 검색이 많이 되기 위해서는 Outliner를 잘 작성해야한다. <br/>

- outliner 영향이  가는 태그 <br/>
header, main, footer : 영향력 없음<br/>
section, article, aside, nav : 영향력 있음<br/>
해당 구역에서 h1~6 중요도를 지정해서 가질 수있으며, 부모 자식 관계 또한 포함이 된다.

- 자신 h1~6 에서 설정한 제목 뒤에 자기보다 높으면 자신의 자식관계로 중요도가 낮아진다.


_outliner란?_
_화면의 구성에서 중요도를 기준으로 구성을 나누는 것으로, web화면 별 목차를 만든다._ <br/>
_목차의 내용은 브라우저 검색시 우선순위가 될 수 있다._

- 다음 소스로 분석해서 확인하자 

```html 
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SB</title>
</head>

<body>
  <!-- header 여러번 쓸 수 있다.-->
  <header>
    <h1>SimpleBitsdo your self</h1>
    <nav>
      <h2>
        Main Navigation
      </h2>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">WORK</a></li>
        <li><a href="">BOOKS</a></li>
        <li><a href="">ABOUT</a></li>
      </ul>
    </nav>
  </header>
  <!— main 한번만 쓸 수 있다.—>
  <main>
    <article>
      <header>
        <h2>SASS FOR WEB DESIGNERS</h2>
      </header>
      <div>
        <!— Main 내용 —>
      </div>
      <footer>
        <ul>
          <li>Nov 13, 2013</li>
          <li>books, css, sass</li>
          <li>postsmpl.bt/19k7Qpj</li>
        </ul>
      </footer>
    </article>
  </main>
  <!— aside —>
  <aside>
    <h3>side content</h3>
    <h4>About Simplebits</h4>
    <h4>bookt by dan</h4>
    <h4>archives</h4>
    <h4>elsewhere</h4>
    <h4>what im working on</h4>
    <h4>lastest project</h4>
  </aside>
  <!— footer —>
</body>
</html>
```


-tip <br/>
main 태그 : 한 번만 사용할 수 있다.

header, footer, aside: 여러면 사용해서 뷰포트 안의 구역에서 또 사용 할 수있다.