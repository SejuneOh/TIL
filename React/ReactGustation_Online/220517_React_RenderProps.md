# Render Props & Prop Types

## Goals

1. Render Props? 
2. Prop Types


--- 

## Render Props? 

컴포넌트의 재사용 방법중 하나이며, 코드들 공유하기 위해 props를 이용해 간단한 테크닉이다.

무엇을 랜더링할지 컴포넌트에 알려주는 함수입니다.

- 렌더링하는 컴포넌트에 추가적으로 어떤 props로 렌더링할 지 적어줍니다. 
  
```html 
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

### 주의사항

- pureComponent에서는 사용을 자제해야합니다 
  -  재활용성의 낮아지고 
  -  데이터가 변경되면서 계속적으로 렌더링이 되기 때문에서 성능 저하가 생깁니다 

--- 

## [Prop Types](https://ko.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper)

Props 타입을 확인 위한 도구 이며 

children이 parent로 부터 받아온 props로 받아온 데이터 타입을 확인해서 버그를 최소화 한다.

- propTypes는 성능상의 이유로 개발 모드(Development mode) 에서만 확인될 것입니다.
- Props에서 type로 children의 개수를 제하을 줄 수도있다. 
- type의 검사는 개발자 커스텀 할 수 있다.
- default 값으로 기본 정보를 담을 수 있고, 타입도 정할 수 있다.



```js
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```


```js
import React from 'react'
import PropTypes from 'prop-types'

function PropsComponent(props) 
{
  return <div>{props.name}</div>
}

PropsComponent.defaultProps = {
  name: "Jimmy",
  age: 19,
}

// PropsTypes
PropsComponent.propTypes = {
  name: PropTypes.string,
  // age: PropTypes.number.isRequired,
  age: function(props, propName, componentName) {
    if (!/1/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
}

export default function Component() {
  return (
    <div>
      <PropsComponent/>
    </div>
  )
}

```