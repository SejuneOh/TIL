# Form 

## 설명 
- html폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가진다. 다른 React와 다르게 동작한다.
- form은 기본적으로 화면 이동의 이벤트를 수행한다.

---

### Controlled Component

**컴포넌트 자체에 value를 주고 그것을 state로 관리하는 것을 control이라고 한다.**

- form input 자체의 사용하는 값을 state로 관리한다. 
- 다중 입력같은 경우 event.target.name을 받아서 다중 입력 상태를 관리 할 수 있다. 

```js
import React, { useState } from 'react'



export default function Controlled() {

  const [name, setName] = useState("");
  const [essay, setEssay] = useState("Please write an essay about your favorite DOM element.");
  const [flavor, setFlavor] = useState("coconut");

  function handleChange(event) {

    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'essay':
        setEssay(event.target.value);
        break;
      case 'flavor':
        setFlavor(event.target.value);
        break;
      default:
        console.log("nothing");
    }
  }


  // function flavorHandleChange(event) {
  //   setFlavor(event.target.value);
  // }

  // function essayHandleChange(event) {
  //   setEssay(event.target.value);
  // }


  function handleSubmit(event) {
    alert(`Name: ${name}, Essay: ${essay}, Flavor Fruit: ${flavor}`);
    event.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <select name="flavor" value={flavor} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

```

### UnControlled Componet

- form 자체의 내부상태를 확인해서 관리한다. 
- defaultValue, ref로 값의 상태를 확인할 수 있다.

```js
import React, { useRef } from 'react'

export default function UnControlled() {

  const input = useRef(null);

  function handleSubmit(event) {
    alert(`A name : ' + ${input.current.files[0].name}`);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="file" ref={input} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

```