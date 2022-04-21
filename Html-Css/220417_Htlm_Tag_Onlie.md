# Html Tag 기본 문법

## Goal
1. Tag Element, Content의 이해
1. 부모 자식 관계의 이해
1. Empty tag(빈 태그)
1. Tag의 Attribute &  Value
1. Inline vs Block
1. 전역속성 
---

## Element(요소)
```html
<!-- tag 안에 내용까지 포함해서 Element(요소) -->
  <tag>
    <!-- Content : Element 안의 내용을 말한다. -->
    Content 
  </tag>
```
---

## 부모 Tag와 자식 Tag의 관계 이해
```html
<!-- 부모 -->
<div>
  <!-- 자식 -->
    <div>
      child-1
    </div>
    <div>
      child-2
    </div>
</div>
```
상위 요소(상위 element) : tag 기준으로 자신을 감싸고 있는 tag를 말한다.<br/>
하위 요소(하위 element) : tag 기준으로 자신이 감싸고 있는 하위 tag를 말한다<br/>

---

## Empty tag(빈 태그)
Empty tag(빈 태그)란 ? <br/>
Tag가 닫히지 않은 상태거나, 닫힘 태그가 없는 그냥 태그를 말한다<br/>
예시)<br/>
```html
<!-- 열려있는 태그 같은경우 html 3~4에 나왔으며 -->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 
  닫혀 있지만 tag안에서 닫혀있는 태그는 XHTML때 나왔으면 엄격한 기준으로 닫기로 명시했지만 HTML5가 나오면서 사라졌다...과거 소스로 짰을경우 간혹 볼 수 있다.
-->
<br/>
```

---

## Tag의 Attribute &  Value

- 태그의 속성과 값 
   - 사용목적 : tag(요소) 기능의 확장을 위해서 사용한다. 이미지의 삽입, input의 종류 <br/>등을 위해서 사용한다.
   - empty tag 같은 경우에는 속성과 값이 필수로 들어가는 tag가 있다.(img, input)
   - 사용 목적에 따른 tag 속성을 파악 후 사용해야한다 
```html
<tag Attribute="value"></tag>
<img src="path" alt="image"/>
<input type="button" />
```

---

## Inline vs Block

### Inline 요소(tag)란?<br/>
글자를 만들기 위한 요소들이며, 화면에서 왼쪽에서 오른쪽으로 쌓아 올리는 특성이 있다. <br/>
요소의 줄바꿈 표시는 띄어쓰로 화면에 표시된다.

#### 특성
1. 포함한 콘텐츠 크기만큼 자동으로 줄어들려는 특성이 있다. 
1. Block 요소를 Inline 내부에서 사용 할 수 없다.
1. 가로,세로(width, height)는 지정 할 수 없다. 
1. Margin, Padding 속성은 좌우 여백만 줄 수 있다. 상하 x 

예시) 
```html
<style>
  span {
    /* 적용되지 않는다. */
    width: 100px;
    height: 100px;
  }
</style>
<span>Text</span>
```

#### Tags(예시)

Tag|설명|Attribute|
:--|:--:|:--:| 
img| 이미지를 삽입하는 요소|src(이미지 경로), alt(이미지 설명)
a|페이지 이동하는 하이퍼링크를 지정하는 요소|href, target(다음 링크를 열 방법)
span| 특별한 의미가 없는 구분 요소|
br | 줄 바꿈 요소

### Block 요소(tag)란?<br/>
Layout(상자)를 만들기 위한 요소들을 말한다.

#### 특성
1. 수직으로 쌓아 올린다는 턱성이 있다.
1. 부모 요소의 크기(넓이)만큼 자동으로 늘어나는 요소이다.
1. 가로, 세로 넓이를 style 속성에서 조절이 가능하다.
1. Margin, Padding 여백을 모두 사용할 수 있다.
1. 자식요소로 Block, Inline 요소 모두 사용 가능하다 .

#### Tags(예시)
Tag|설명|Attribute|
:--|:--:|:--:| 
div|레이아웃 구불을 사용하는 요소, 의미 없는 역역을 잡을 때 사용||
P| 문장을 구분하는 요소||
h1~6|제목을 의미하는 요소
ol| 순서가 있는 리스트 요소 
ul| 순서가 필요없는 리스트 요소


### Inline + Block 요소 

#### input 요소 
input 요소는 왼쪽에서 오른쪽으로 쌓아올리는 inline 특성이 있지마, block 요소의  
가로 세로 크기를 지정할 수 있다.

### table 요소 
block의 요소안에 포함되지만 표를 표시하는 요소이다.

```html 
<table>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
      </tr>
      <tr>
        <td>c</td>
        <td colspan="2">d</td>
      </tr>
    </table>
```

--- 

## 전역속성 
전역속성이란 모든 요소에서 사용할 수 있 속성으로 다음 아래와 같이 정리한다 

속성| 설명|
:--|:--:|
title| body의 모든 태그에서 사용할 수 있으며, 요소 정보를 툴팁처럼 보여준다.|
style| 요소의 스타일을 지정할 수 있다.
class| 요소를 지칭하는 중복가능한 이름이다. js, css에서 요소를 지정할 때 사용한다.
data-name="data"|기본적으로 문자 데이터를 css, js에서 임시 사용하도록 임시 지정가능하다.|


### data 예시)
```html 
<div data-fruit-name="apple">사과</div>
<div data-fruit-name="banan">바나나</div>
```

```javascript
const els = document.querySelector('div');
els.foreach(el => {
  //특정 데이터를 잠시 저장할 수 있고, fruit-name은 js에서 -없이 대문자 처리한다.
  cosole.log(el.dataset.fruitName);
});
```

