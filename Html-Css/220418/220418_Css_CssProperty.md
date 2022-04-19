# CSS Property

## Goals
1. CSS의 속성
    1. Width, height
    1. CSS의 단위 
    1. Margin, Padding
    1. Border
    1. Boxsizing
    1. Display
    1. Opacity
    1. Font

---

### CSS의 속성 
_CSS는 HTML 구성을 꾸며주는 역할로 아래와 설명되는 내용을 꾸며주기 위해 많은 속성을 가지고 있다._
<br/>
_그 속성에 대해서 공부해보자!!!_

- 글꼴, 문자 <br/>
  글꼴(font), 글꼴 크기, 문자
- 배경<br/>
  박스모델의, 배경, 이미지를 삽입하는것
- 배치<br/>
  특정한 위치의 요소를 배치를 하는 것을 
- 플렉스(정렬)<br/>
  수평, 수직 요소를 관리하는 부분을 말한다.
- 전환<br/>
  요소의 전,후 상태를 변화를 자연스럽게 해준다.
- 변환<br/>
  요소를 회전, 이동, 크기를 조절하는 요소의 변화를 주는 속성(2d, 3d)
- 띄움 <br/>
  요소를 공중으로 띄운다, 문자가 흐를 수 있는 구조. 요소 주위에 문자가 흐를 수 있는 요소
- 애니메이션<br/>
  복잡한 화면 구성을 자연스럽게 구현해주는 속성.
- 그리드 <br/>
  2차원의 레이아웃을 손쉽게 제어할 수 있는 속성
- 다단 <br/>
  글자의 문단을 구별해주는 기능이다.
- 필터<br/>
  이미지의 필터기능을 할 수 있는 속(블러, 흑백, 반전)


---

### Width, Height

- Block
<br/>
  Block 요소는 기본적으로 넓이는 부모의 요소의 크기를 최대한 사용하려는 특성이 있다.
  <br/>
  높이는 요소의 최소한의 높이를 가지려는 속성이 있다.
- Inline 
<br/>
요소의 최소한의 길이와 넓이를 가지려는 특성이 있으며, 길이와 넓이 속성을 적용해도 내용을 따른다.
<br/>
길이와 넓이를 주기 위해서는 display 속성을 바꿔줘야 가능하다.

_위와 같이 특성일 이해하고 width, height 속성에 대해서 알아보자_

- width, height
<br/>
가로, 세로 길이를 지정해주는 특성으로 

속성|default|value|설명|단위|
--|:--:|:--:|:--:|--:|
width|auto(브라우저가 너비를 계산)||가로 넓이를 준다|px, em, vw|
height|auto(브라우저가 너비를 계산)||세로 넓이를 준다.|px, em, vh|
max-width,height|none||최대 가로,세로 길이 제한 | px, em, vw, vh|
min-width,height|0||최소한의 가로 세로 길이 제한|px, em, vw, vh|

- _자식의 width, height : 속성이 정해지지 않았으면 부모가 가지고있는 속성의 크기를 따르는 특성이 있다._<br/>
- _Inline 요소를 그대로 사용할 시 위의 속성은 적용되지 않는다._

---

### CSS 단위 

단위|설명|
:--|:--:|
px| 화면의 출력하는 하나의 점의 단위로 이미지를 구성하는 최소의 단위.
%| 요소에 따른 크기를 백분률로 표시한다.
em| 부모 혹은 자신의 글꼴을 기준으로 상대적인 크기를 표시한다. (글꼴 16px이면 1em = 16px)
rem| 루트 요소의 글꼴 크기를 기준으로 상대적인 크기를 표시한다. 부모의 요소가 아닌 html의 요소를 사용하기 때문에 변화가 없다. html 폰트를 변화면 rem 요소는 모두바뀐다.
vw| 뷰포트 가로너비의 백분율 (1vw = 화변 1/100를 사용)
vh|뷰포트 세로너비의 백분율


---

### Margin, Padding

- Margin?<br/>
_요소의 외부 여백을 지정한다. 단축 속성, 음수를 사용가능하다._<br/>
*기본 값 : 0<br/>
*사용 속성 값 : auto<br/>
*단위 : px, em, vw %(부모 요소의 가로 너비를 대한 비율 지정) <br/>
*단축 속성 :<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10px (상하좌우 모두)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10px 10px (상하 좌우)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10px 10px 10px (상 좌우 하)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10px 10px 10px 10px(상 좌 하 우)<br/>

- _위치에 따른 속성을 따로 줄 수 있다. margin-top, margin-bottom, margin-left, margin-right_
- _음수 값을 줄 수 있으며, 음수값은 여백이 좁혀지는 것을 의미한다._

<br/>


- Padding?<br/>
_요소의 내부 여백을 지정하는 단축속성_<br/>
*기본 : 0 <br/>
단위 px, em, vw,(% : 부모 요소의 가로너비에 대한 비율지정)<br/> 
단축속성은 margin과 같다.<br/>
- _padding-left, top right, bottom_
- _여백이 커지면 전체 크기가 커진다. 이유는 content안의 여백만큼 늘어나기때문이다._


_단축속성이란?_ <br/>
_CSS에서 속성 값을 띄어쓰기 기준으로 여러개 나열 했을 때 의미에 맞게 작용하는 것을 말한다._

---

### Border
_요소의 테두리선을 지정하는 단축속성_ <br/>
_표현 : border: border-width border-style border-color_

```css
div {
  border: 1px soild red;
}
```
- 모든 요소를 작성해서 선 두께가 늘어날 수록 크기는 커진다.   
  왜 contents 벽면에 테두리선 두께가 포함되기 때문이다.


- border-width :  
    - margin padding 단축 속성과 같다.
    - default : medium 중간두께 
    - value : thin, thick (속성을 주는 것 보다 정확한 값을 주는 것을 권장한다.)
<br/>
<br/>
- border-style: 테두리 속성
    - default : none(선 없음)
    - value : soild : 실선 ,dotted : 점선 ... ,dashed : 파선 ---- ,double : 두줄 선 ====
<br/>
<br/>
- border-color: 테두리 선 색
    - default : black 
    - value : 색의 값, transparent(투명)
<br/>
<br/>
- 색의 표현(CSS의 전체에서 사용가능)
    - 색상이름 : 브라우저에서 제공하는 색의 이름으로 브라우저 마다 조금씩 다를 수 있다. (red, royalblue)
    - Hex 색상코드(16진수) : #00000, #ffffff
    - rgb, rgba : rgb(0,0,0), rgba(0,0,0,0.5) 투명도
    - hsl : 색상, 채도, 명도 (hsl(120, 100% 50%))
    - hsl : : 색상, 채도, 명도, 투명도 (hsl(120, 100%, 50%, 10% ))
<br/>
<br/>
- _border-위치, border-위치-width, border-위치-stlye, border-위치-color에 따른 속성도 줄 수 있다._
  
  
 - border-radius(둥글게)
    - defualt : 0 
    - 단위 : px, em, vw
    - _지정크기만 반지름의 원을 그려 모서리를 둥글게 만든다_
    - border-radius : 0, 0, 0, 10 (위부터 시계방향)

---

### box-sizing

_요소의 크기 계산 기준을 지정 해준다._<br/>
_요소의 Content의 내용이 커지거나 내용이 많아지면 요소는 커지는 특성이 있어 요소의 크기를 계산하는 방식을 정한다_

- default : content-box(요소의 내용으로 크기 계산)
- value : border-box (요소의 내용 + padding + border크기 계산)

<br/>
<br/>
### overFlow  
_요소의 크기 이상으로 내용이 넘쳤을때, 보여짐을 제어하는 단축속성_

- default :visible
- value : hidden, scroll, auto
    - hidden : 넘치는 요소를 숨긴다.
    - scroll : 하단 우측에 요소가 넘치는 만큼 스크롤을 생겨 요소를 보여준다.
    - auto : 넘치는 요소 부분만 스크롤을 생성해서 보여준다.
- overflow-x,y : 축 기주는으로만 확인해서 생긴다.

<br/>
<br/>
### display
- _요소를 어떻게 보여지게 하는지 정하는 속성이다._  
- _레이아웃 기준로 표시하는 것을 말한다._  
- _요소의 특성에 따라 기본값은 다르다 BLOCK, INLINE_
- value :  
  - block : 레이아웃
  - inline : 글자
  - inline-block : 레이아웃 + 글자
  - flex : 플렉스 박스 1차원
  - grid :그리드 2차원 (행과 열)
  - none : 화면에서 사라짐 요소는 존재하나 안보이게할 수 있다
  - etc: table, table-row, table-cell.... 
<br/>
<br/>

### opacity(투명도)
_요소의 투명도를 정한다_
- default : 1(불투명)
- value : 0~1
- 앞의 0을 생략 가능하다.

---

### Font
_글자, 문자에 대한 속성_

- font-style
  - default : normal
  - value : italic
<br/>
<br/>


- font-weight : 폰트 두께 
  - 기본: normal, 400 
  - value: 100~900 bold(700), border(부모요소보다 크게), lighter(상위 요소보다 더 얇게)
<br/>
<br/>

- font-size: 글자의 크기 
  - 기본: 16px
  - value:  %, smalle, lager, xx-small~ xx-lager, 단위

- line-height: 한줄의 높이, 행간과 유사
  - 기본: normal
  - 숫자 : 요소의 글꼴 크기의 배수로 지정(font-size * value 배)
  - 단위로 px : 한줄의  수직으로 가운데 정렬한다. 
<br/>
<br/>


- font-family: 글꼴1, 글꼴2, 글꼴계열(serif 필수!) -> 브라우저가 순서대로 사용할 수 있는 글꼴을 선택한다.  
폰트가 띄어쓰기가 있으면 ""로 묶어야한다.
  - serif : 바탕체 
  - sans-serif : 고딕체 계열 
  - monospace : 고정너비 글꼴계얄
  =- cursive: 필기체 
  