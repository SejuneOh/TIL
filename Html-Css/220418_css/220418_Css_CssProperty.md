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
    1. 문자
    1. 배경
    1. 배치 
    1. Flex
    1. 전환 
    1. 변환

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
  
--- 
### 문자
_글자의 색상이이나 정렬 꾸며주는 속성을 말한다_</br>
_아래의 속성과 의미를 정의해보자_

속성|설명|기본값|다른 프로퍼티
:--|:--:|:--|:--|
color|글자의 색상을 지정해주는 속성|rgb(0,0,0) 검정|글자를 정해줄 수 있는 색상(red, blue #fff)
text-align| 문자의 정렬 방식을 정해주는 속성 |left|underline, overline, line-through(중앙선, 취소선) 
text-indent|문자의 들여쓰기 내려쓰기 속성을 사용할 수 있다.|0|px,em, rem / 음수 일 때 내어쓰기

---
<br/>

### 배경
_요소의 배경에 대한 설정을 해주는 속성이다._

속성|설명|기본값|다른 프로퍼티
:--|:--:|:--|:--|
background-color|요소의 색상을 지정|transparent (투명)|색 지정
background-image|배경이미지 출력을 해주는 속성|url("경로");|특징 이미지가 배경보다 작아지면 바둑판식으로 이미지를 출력한다.
background-repeat| 요소의 배경 이미지 반복 설정 속성|repeat(이미지를 수직, 수평 반복)|repeat-x, repeat-y, no-repeat
background-size|배경 이미지 크기 속성|auto(이미지의 본연의 크기)|단위, cover(비율의 길이가 큰 기준에 맞춘다.), contain(요소의 짧은 넓이의 기준으로 이미가 맞춰진다.)
background-position|요소 배경의 이미지 위치 |0% 0% |top, bottom, left, right, center (단위를 입력하면, x축, y축 값이 적용된다.)
background-attachment|배경 이미지 스크롤 특성|scroll(이미지가 요소를 따라서 같이 스크롤|scroll(이미지가 요소를 따라서 같이 스크롤|fixed(이미지가 뷰포트에 고정, 스크롤 x)

---

<br/>

### 배치
_요소의 위치 지정을 위한 기준을 설정해준다._

- Position : 요소의 위치 지정을 위한 기준을 설정해준다.
    - 기본 : static


    - value : relative(요소 자신 기준), absolute(위치상 부모 요소 기준), fixed(뷰포트를 기준), sticky(스크롤 영역 기준) 
    - relative : 이동 전, 위치는 시각전으로만 사라져있다. -> 자기 자신을 기준으로  위치를 변경하지 않는다.
		왜냐하면 쌓이는 구조에서 자신의 위치가 옮겨주었을때, 배치의 기준과는 좀 달라진다.
    - absolute: 위치상의 부모요소를 기준을 배치를 한다.
        - 위치상의 기준으로 부모의 포지션이 정해져있지 않으면 조상의 위치를 기준으로 잡는다.
    - fixed : 뷰포트 기준으로 배치한다.  

- right, left, bottom, top, z-index
    - 기본 : auto


    - 단위 position 기준으로 위치를 지정할 수 있다.
    - 음수를 사용할 수 있다.

<br/>
<br/>

_요소의 display가 block속성으로 변경되는 특성_  


_position 속성의 값으로 absolute, fixed가 지정되는 요소는, display가 속성이 block으로 자동변경_

---

### _요소 쌓임 순서(Stack order) : 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지 결정)_
1. 요소에 position 속성의 값이 있는 경우 위에 쌓이(기본 static 제외)
1. 1번 조건이 같은 경우, z-index속성의 숫자 값이 높을 수록 위에 쌓임
1. 1,2 번 조건까지 같은 경우 html의 나중에 작성된 구조일 수록 위에 쌓임

- z-index : 요소의 쌓임 정도 지정
	- 기본 : auto
	- 값 : 숫자

---

### _Flex : 1차원의 레이아웃을 정렬하는 방법_

#### _Flex container : Flex 기준이 되는 부모요소(내부 요소와 상관 없음)_
- display : flex container의 출력 특성 
	- flex : 블럭 요소와 같이 flex container 정의
	- inline-flex : 인라인 요소와 같이 동작할 수있도록 명시한다. 
		
- flex-direction : 주축 설정
	- 기본 : row 
	- 값 : row-reverse, colum, colum-reverse
		
- flex-wrap : 요소들을 줄바꿈 여부를 지정한다 
	- 기본 : nowrap : 묶음 없음, 줄바꿈 없음 
	-	값 : wrap 여러줄로 묶음
		
- justify-content: 주축의 정렬 방법
  - 기본 : flex-start(왼쪽)
  - 값 : flex-end(오른쪽), center(가운데정렬), space-between, space-around
		
- align-content : 교차축의 여러줄 정렬 방법 줄바꿈 상태(2줄 이상) 및 공간이 있을때 작용한다. 
  - 기본 : stretch(flex item를 시작점으로 정렬)
  - 값 : flex-end, center, space-between, space-around


- align_items : 교자축의 한줄 정렬 방식
  - 기본 : stretch(flex item를 시작점으로 정렬)
  - 값 : flex-end, center, space-between, space-around, baseline : 문자기준선에 정렬




#### _Flex container : Flex 부모 요소의 자식한테 줄 수 있는 속성_

- order : flex 아이템 순서
  - 기본 : 0
  - 값 : 순서(음수값을 지정할 수 있다.
		
- flex-grow : 증가 너비 비율 
  - 기본 : 0 
  - 값 : 숫자
  - item이 찾이하는 축의 기준의 길이 만큼 길어진다.
	
- flex-shrink : 요소 아이템 감소 너비 비율
  - 기본 : 1
  - 숫자 : 감소 비율(0은 item이 줄어들지 않는다)
		
- flex-basis : flex item 공간(content 넓이 ) 배분 전 기본 너비
  - 기본 : auto
  - 단위 : px, em vw

--- 


### _전환_
- transition : 속성명/지속시간(필수)/타이밍함수/대기시간
  -	기본 : all 
  - 요소의 전환(시작-끝) 효과를 지정하는 단축 속성
		- 지속시간은 필수 요소
    - 기본 : 0 
    - 값 : 숫자 
			
- transition-property(속성명 width, height)
  - 전환 효과를 사용할 속성 이름 지정
  - 기본 : all 
  - 값 : 속성이름

- transition-duration : 지속시간
  - 기본 : 0 
			
- transition-timing0function : 전환 효과의 타이민(easing)함수를 지정
  - 기본 : ease(느리게-빠르게-느리게)
  - 값 : 
    - liner : 일정하게
    - ease-in : 느리게 -빠르게
    - ease-out : 빠르게 느리게
    - ease-in-out : 느리게 빠르게 느리게
    - cubic-bezier(n,n,n,n) : 자신만의 값을 지정
    - steps : 잘 사용하지 않음
			
- transition-delay 
  - 기본 : 0 (대기시간 없음)
  - 값 : 시간

--- 

### _변환_

_transform : 2d, 3d 기준으로 요소에 회전, 기울기 속성을 줄 수 있다._ 
			
- 2d 변환함수
  - translate(x,y) : 요소를 이동(x축, y축)
  - translateX(x) : x축 이동
  - translateY(y) : y 축 이동
  - scale (x,y) : 크기 x축 , y축 -> 하나만 적으면 둘다 적용된다.
  - rotate(degree) : 회전 각도 (45deg)
  - skew(x,y)
  - skewX(x) :x 축 기울임
  - skewY(x) :y 축 기울임
  - matrix(n,n,n,n,n,n) 2차원 변환 효과를
  - 사용하기 어려워 전자의 함수가 나왔기 때문에, 앞의 변환 함수를 사용하면된다.

- 3d 변환함수
  - translateZ(z)
  - translate3d(x,y,z)
  - scaleZ
  - scale3d
  - rotateX(x) : x축 기준으로 회전
  - rotateY(y) : y축 기준으로 회전
  - rotateZ(z) : z축 기준으로 회전
  - rotate3d(x,y,z,a) : 회전 (x축, y축, z축, 각도)
  - perspective(거리 px) : 원근법 거리 - 사용 할 것이라면 맨처음 써야한다.

- perspective 속성  : 하위 요소를 관찰하는 원근거리를 지정가능한
  - 단위 : px 
				
- 속성 함수와 차이점

속성|적용대상|기준점 설정|
--|--|--|
perspective: 600px;| 		관찰대상의 부모 요소|	perspective-origin
transform : perspective(600px)| 관찰 대상	|		transform-origin


- backface-visibility : 3d 변환으로 회전된 요소의 뒨면 숨김 여부 
  - 기본 : visible
  - 값 : hidden

---