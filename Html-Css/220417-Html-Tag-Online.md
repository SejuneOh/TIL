# Html Tag 기본 문법

## Goal
1. Tag Element, Content의 이해
1. 부모 자식 관계의 이해
1. Empty tag(빈 태그)


## Element(요소)
```html
<!-- tag 안에 내용까지 포함해서 Element(요소) -->
  <tag>
    <!-- Content : Element 안의 내용을 말한다. -->
    Content 
  </tag>
```

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



## Empty tag(빈 태그)
Empty tag(빈 태그)란 ? <br/>
Tag가 닫히지 않은 상태거나, 닫힘 태그가 없는 그냥 태그를 말한다<br/>
예시)<br/>
```html
<!-- 열려있는 태그 같은경우 html 4~5에 나왔으며 -->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 
  닫혀 있지만 tag안에서 닫혀있는 태그는 XHTML때 나왔으면 엄격한 기준으로 닫기로 명시했지만 HTML5가 나오면서 사라졌다...과거 소스로 짰을경우 간혹 볼 수 있다.
-->
<br/>
```
