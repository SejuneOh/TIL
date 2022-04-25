# Html 만들때 자주사용 하는 TIP

## flex로 중앙 맞추기

```html
<div class="container">
  <div class="child"></div>
</div>
```

```css
.container {
  width: 900px;
  height: 700px;
  background-color: red;
  position: relative;
}

.child {
  width: 300px;
  height: 300px;
  background-color: blue;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
```

1. position으로 배치할 때
1. 자식의 위치를 top,bottom / left, right를 준다.
1. margin을 자신이 중앙을 맞추고 싶은 곳에 auto 속성을 준다.

---

### 헷갈리지 않게 기억해야하는 속성

- position중 속성을 사용하는 요소는 block 요소로 바뀐다.
- position: fixed, absolute 속성을 사용하면, 내용만큼의 넓이와 높이를 최소한으로 가질려고한다. 넓이 주는 것 필수
- 인라인 속성의 중앙 맞춤은 line-height 속성을 height 만큼 주면 중앙 맞춤한다.

```css
span {
  color: white;
  background-color: blue;
  display: block;
  height: 200px;
  line-height: 200px;
}
```
