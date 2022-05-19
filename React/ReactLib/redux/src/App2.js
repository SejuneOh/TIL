import logo from './logo.svg';
import './App2.css';
import React, { useState } from 'react';
import { createStore } from 'redux';
/*
  Provider : 어떤 컴포넌트에게 제공할 것인가를 정의해준다.  /  Provider는  어떤 store를 써서 정의 할 것인지 정의해 줘야한다(컴포넌트 attribute에)
  usetSelector : state의 값을 가져올 때, 사용하는 함수이고  인자로 function을 받는다.
  useDispath : state를 변경하는 이벤트가 사용되는 부분에서 action을 정의하고 사용한다.
*/
import { Provider, useSelector, useDispatch } from 'react-redux'


//2. reducer  
// 현재의 상태의 값을 어떻게 바꿀지 action을 받고 새로운 state값을 리턴한다.
function reducer(currentState, action) {

  // current State값이 정해져 있지않았을 때, 기본값을 정의해준다.
  if (currentState === undefined) {
    return {
      number: 1,
    }
  }

  console.log(`action${action}`);
  console.dir(currentState);
  // 각각의 state를 불변하게 만들어야한다.
  const newState = { ...currentState }

  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState

  return
}

// 1. store 생성 store 자체는 변경되서는 안되기 때문에 const로 써준다. 
// import { crateStore } from 'redux';
const store = createStore(reducer)

console.log(typeof store);


function App() {

  return (
    <div className="App">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1 ></Right1>
        </Provider>
      </div>

    </div>
  );
}

function Left1(props) {
  console.log('1');
  return (
    <div>
      <h1>Left1</h1>
      <Left2 ></Left2>
    </div>
  )
}
function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
}

function Left3(props) {
  console.log('3');
  function f(state) {
    return state.number
  }

  const number = useSelector((state) => state.number)
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  )
}


function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}

function Right3(props) {
  const dispatch = useDispatch()
  console.log(`dispatch: ${typeof dispatch}`)
  return (
    <div>
      <h1>Right3</h1>
      <button onClick={() => {
        dispatch({ type: 'PLUS' })
      }}>Button + </button>
    </div>
  )
}





export default App;
