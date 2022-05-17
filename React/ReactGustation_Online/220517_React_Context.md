# Context

## Goal
1. Context란?
2. Context API

---

## Context란?
_컴포넌트 트리르 넘어 데이터를 공유할 수 있는 방법_

언제써야할까? 
- 유저 로그인, 테마, 언어 app 전체에서 전역적인 데이터를 관리할 때 사용한다. 

고려해야할점 
- 컴포넌트 재사용성이 없어 질 수 있음으로 필요할 때 사용해야한다.
- context보다 컴포넌트 합성을 먼저 고려해야하고 


--- 

## Context API

### React.createContext

```js
export const ThemeContext = React.createContext(themes.dark);
```
- param : defaultValue
- 설명 :
  - context 객체를 만드는 api
  - context를 구독하고있는 컴포너트를 렌더링 할 때 트리 상위에서 가장 가까이 있는 짝이 맞는   Provider로부터 현재 값을 읽습니다.
  - defaultValue는 Provider를 찾지 못했을 때 쓰이는 값

### Context.Provider


```html 
//provider
<ThemeContext.Provider value={this.state.theme}>
  <ThemedButton/>
</ThemeContext.Provider>
```

- 설명
  - context를 구독하는 컴포넌트들에게 context의 변화르 알리는 역할
  - value attribute의 값을 props로 받아서 하위에 있는 컴포넌트에게 전달한다. 
  - 전달 받는 컴포넌트 수에 제한은 없다
  - provider 및에 provider를 배치하는 것도 가능하며, 하위 provider가 우선 순위가 된다.


### Class.contextType

```js 
class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
      {...props}
      onClick={props.changeTheme}
      style={
        {
          backgroundColor: theme.background,
          color: theme.foreground
        }
      }>Button</button>
    )
  }
}

ThemedButton.contextType = ThemeContext;
```
- 설명 
  - context 객체는 contextObj.contextType = tpye을 정할 수 있고
  - 이 프로퍼티는 클래스안에 binding 하여 할당 가능하다.
  - binding한 프로퍼티는 context의 가장 가까운 provider를 찾아 그 값을 읽고 사용 할 수 있다.

### Context.Consumer

```js

<MyContext.Consumer>
  {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>

<ThemeContext.Consumer>
            {theme => (
              <div style={
                {
                  width:300,
                  height: 300, 
                  backgroundColor: theme.background,
                }
              }>
              </div>
            )}
</ThemeContext.Consumer>
```

- 설명 
  - context의 변화를 구동하는 React 컴포넌트이다.
  - 함수 컴포넌트 안에서 context를 구독 할 수 있다.
  - 자식 함수로 구성해야합니다.
  - context의 현재 값을 받고 노드를 반환한다. 
  - Provider중 가까운 상위 트리의 props 동일 하게 사용합니다.

### Context.displayName

```js
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

- 설명 
  - 문자열 속성으로 설정할 수 있다. 
  - context를 어떻게 보여줄 지 정한다.

---

#### 주의사항 

```
다시 렌더링할지 여부를 정할 때 참조(reference)를 확인하기 때문에, Provider의 부모가 렌더링 될 때마다 불필요하게 하위 컴포넌트가 다시 렌더링 되는 문제가 생길 수도 있습니다. 예를 들어 아래 코드는 value가 바뀔 때마다 매번 새로운 객체가 생성되므로 Provider가 렌더링 될 때마다 그 하위에서 구독하고 있는 컴포넌트 모두가 다시 렌더링 될 것입니다.
```