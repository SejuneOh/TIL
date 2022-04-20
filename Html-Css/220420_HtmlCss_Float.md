# Inline, Block, Float

## Goals

1. 인라인. 블럭 속성의 이해
1. 두가지 속성을 통한 float 속성으로 html 배치 해보기

---

### _Inline Level_

- 특성

  - 글자를 다루는 태그를 말한다.
  - 글자를 담기 위해서 좌측에서 우측으로 흐르는 성질을 가지고있다
  - 인라인 성질의 display 상태 값으로 몇가지 용도에 따라 다르게 지정 가능
  - 브라우저가 inline 요소를 먼저 랜더링 시 최초 em 상자 크기를 생성하고  
    lineheight 속성이 있으면 상자는 lineheight 속성의 크기 만큼 생성되지면 내용은 em에 맞춰진다.
  - 상속이 되는 특성이 있다.

- display
  - inline : 대표적인 인라인 상태 값
  - inline-block : 인라인의 좌에서 우측으로 흐르는 성질고 상하 높이를 지정할 수 있는 block 성질
  - table-cell

### _Block level_

- 특성

  - 높이, 넓이 지정하지 않으면 자신의 내용에 따라 좌우는 최대한 부모요소 크기 만큼, 상하는 최소한으로 쓰려는 특성이 있다.
  - 수직으로 쌓는 요소
  - 상속이 거의 없다.

- display
  - block : 블럭 성질 상자를 대표하는 상태 값
  - list-item
  - table
  - table-caption
  - table-footer-group ...

---

_위의 block 계층 요소에 따른 쌓인 구조에 따라 float 속성을 이해해보자_

block 요소 쌓임 계층 구조

1. 기본 흐름층 -> float 층 -> position 층

- float는 신문이나 잡지에서 이미지를 띄우고 이미지 옆에 글자를 흐르기 위해서 많이 사용한다.
- 과거 html 배치를 위해서 사용 할 때도 있었다.

- 속성 : left, right, none

시스템

- float 설정을 하면 해당 요소는 float 층으로 넘어간다. (붕뜬 상태)
- 부모 요소는 float 요소로 이동하여 기본계층에서의 float 설정한 요소를 제외한다.
- float 설정 요소를 감싸고 있는 부모 요소는 자식을 감싸기위해서 다시 영역설정을 해야한다.
- 해당 방법은 부모의 요소 아래와 같이
- 부모 혹은 자식의 요소에 영역을 다시 설정하는 block 요소를 넣어주면 다시 계산하여 영역을 정한다.

/ overflow: hidden; /  
/ float: left; /  
/ display: inline-block; /  
/ display: table-cell; /  
/ position: absolute; /
