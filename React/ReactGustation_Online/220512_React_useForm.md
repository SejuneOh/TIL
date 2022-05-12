# React Form 다루기

## Goals

1. React에서 기본적인 label, input, submit form을 다루어 보자.
2. UnControlled vs Controlled

## label, input, submit

- 기존의 html에서 label, input, submit은 Form에서 submit을 클릭하면 화면이.
  재설정된다.
- 이러한 form 환경을 변경해서 화면을 바꿔보자

- 기존의 DOM의 선언되어있는 이벤트 기본 실행을 멈추고, 개발자가 필요한 처리를 진행할 수 있다.

- 기본적인 value, for 같은경우 JSX에서 htmlForm, defaultValue로 변경해줘야 한다.

```html
<script type="text/babel">
  const rootEl = document.getElementById("root");
  const App = () => {
    const handleSubmit = (ev) => {
      ev.preventDefault(); // 이벤트의 기본적인 행동을 하지마.
      console.dir(ev.target.elements);
      alert(
        `First:${ev.target.elements.fname.value}, LastName:${ev.target.elements.lname.value}`
      );
    };
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label for="fname">First name:</label>
          <br />
          <br />
          <input type="text" id="fname" name="fname" defaultValue="John" />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" defaultValue="Doe" />
          <br />
          <br />
          <input type="submit" defaultValue="Submit" />
        </form>
      </>
    );
  };

  ReactDOM.render(<App />, rootEl);
</script>
```

## UnControlled vs Controlled

- Validation Check로 Event Handle로 변수의 체크를 할려고했다.
- useState값을 바로 가져와서 사용할 때는 설정하는 값과, 설정하는 싱크를 맞춰 줘야한다.
- 특정 값을 React에서 값을 다루고 싶으며, 컴퍼넌트 요소에 value에 값을 넣어 줬다.
- validation check는 onChange가 편하다
- controlled : 요소에 value를 넣어 직접 관리하는 개념

```html
<script type="text/babel">
  const rootEl = document.getElementById("root");
  const App = () => {
    const [message, setMessage] = React.useState();
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const handleSubmit = (ev) => {
      ev.preventDefault();

      alert(phoneNumber);
    };

    const handleChange = (ev) => {
      if (ev.target.value.startsWith(0)) {
        setMessage("phone number is vailid");
      } else {
        setMessage("phone number should strat with zero");
      }

      setPhoneNumber(ev.target.value);
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phon">Phone Number: </label>
          <br />
          <input
            id="phone"
            name="phone"
            onChange={handleChange}
            value={phoneNumber}
          />
          <p>{message}</p>
          <br />
          <br />
          <button
            type="submit"
            disabled={
              phoneNumber.length === 0 && message !== "phone number is vailid"
            }
          >
            submit!
          </button>
        </form>
      </>
    );
  };

  ReactDOM.render(<App />, rootEl);
</script>
```

---
