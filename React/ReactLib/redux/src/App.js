import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [num, setNum] = useState(1)
  return (
    <div className="App">
      <h1>Root : {num}</h1>
      <div id="grid">
        <Left1 num={num}></Left1>
        <Right1 onIncrease={() => {
          setNum(num + 1);
        }} ></Right1>
      </div>

    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1: {props.num}</h1>
      <Left2 num={props.num}></Left2>
    </div>
  )
}
function Left2(props) {
  return (
    <div>
      <h1>Left2 : {props.num}</h1>
      <Left3 num={props.num}></Left3>
    </div>
  )
}

function Left3(props) {
  return (
    <div>
      <h1>Left3: {props.num}</h1>
    </div>
  )
}


function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={() => {
        props.onIncrease();
      }}></Right2>
    </div>
  )
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={() => {
        props.onIncrease();
      }} ></Right3>
    </div>
  )
}

function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      <button onClick={() => { props.onIncrease(); }}>Button + </button>
    </div>
  )
}





export default App;
