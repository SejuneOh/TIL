# React StyleLib


## Goals 
1. CSS In JS? 
2. Styled-Components


## CSS In JS? 

React 및 Web에서 CSS를 사용하면서 문제점

1. Global NameSpace   
   글로벌 면수를 지양하는 JS와 대치되고 있다.

2. 의존성 문제점  
   서비스가 커질 수록 의존성 관리가 어렵다. 

3. 사용하지 않는 코드의 관리가 어려워짐 
4. 클래스 선택자 이름 수정 및 변경이 어렵다.
5. JS코드와 값을 공유하고 싶지 않았다 
6. css 파일이 어떤파일을 쓰는 순서에 따라 덮어지는 상황이 발생하여, Load 타이밍까지 정해야 했다. 
7. 컴포넌트 재사용시에도 어려움이 있다 

단점을 보안하기 위한 방법을 CSS-In-JS를 사용하는 방식의 lib을 알아보자 

 
---

##  [Styled-Components](https://styled-components.com/)

React에서 css를 편하게 작성하게 도와주는 lib이다.

- install
```bash
# with npm
$ npm install --save styled-components
# with yarn 
$ yarn add styled-components
```

**특징**

- 스타일만 들어가있는 react 컴포넌트를 만들어주는 lib
- 이미의 값으로 클래스 이름을 지정하여, 중복되지 않고 의존성이 낮게 관리한다.
- props 조건에 따른 스타일이 가능하다. 
```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// props로 같은 css를 다르게 정의 할 수 있다.
<Button primary onClick={()=> alert('Primary')}>Primary</Button>
```

- 스타일 컴포넌트 사이에서 상속이 가능하다.
- a태그 같은 기능을 추가하여 확장성이 높아진다.

```html
<Button as="a" href="#">Link with Button styles</Button>
<TomatoButton as="a" href="#">Link with Tomato Button styles<TomatoButton>
```


- 백틱을 이용한 styled 컴포넌트 정의 
```js
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;

// 사용
<html>
<Wrapper>
  <Title>
    Hello World!
  </Title>
</Wrapper>
</html>
```
- 기존의 tag 선택자를 적용해서 만들 수 있고, 기본 DOM Attribute는 DOM에게 전달된다.
  
- 사용시 return되는 컴포넌트 안에 정의하지 말아라   
  이유 : 생성되는 컴포넌트 라이프사이클안에서 재생성되기 때문에, styled 컴포넌트까지 재생성   되기 때문에, 재사용성과 속도적 측면에서 좋지 않다

- 가상선택자를 사용해서 css를 입힐 수 있고, &(자기 자신) tag로 구현할 수 있다.
- 속성을 overriding 가능하다 
```js
const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


<div>
    <Input placeholder="A bigger text input" size="2em" />
    <br />
    {/* Notice we can still use the size attr from Input */}
    <PasswordInput placeholder="A bigger password input" size="2em" />
</div>

```

- GlobalStyle = createGlobalStyle를 사용해서 전역적인 스타일을 설정할 수 있다.
  - 선언한 컴포넌트 모두든 부분에 적용된다. 