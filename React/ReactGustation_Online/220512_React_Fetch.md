# Fetch?

## Fetch란?

_Fetch API란 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의 되어있다._  
_즉, 외부 네트워크 통신으로 값을 받아 사용할 수 있는 API이다_

- React에서 사용한는 fetch는 object 타입으로 req, res가 포함되어 있다.

- Fetch api로 리소를 취득하귀 위해서는 GlobalFetch.fetch 메소드를 불러 들여야하지만. window로 부터 같은 인터페이스를 구현되어있다.

- _fetch로 읽어드린 res 요소는 pormise객체를 반환한다. 요청의 실패 성공 상관 없이 통신에 대한 객체를 취든한다._

_사용예시_

```html
<script type="text/babel">
  const rootEl = document.getElementById("root");

  const App = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
      )
        .then((res) => {
          return res.json();
        })
        .then((obj) => {
          setData(obj);
        })
        .catch((error) => {
          console.log(error);
          // alert(error);
          setError(error.message);
        });
    }, []);

    if (error != null) {
      return <p>Error</p>;
    }

    if (data == null) {
      return <p>Loading....</p>;
    }

    return (
      <div>
        <p>People</p>
        {data.people.map((data) => {
          return (
            <>
              <span>{data.name}</span>
              <span>{data.age}</span>
            </>
          );
        })}
      </div>
    );
  };

  ReactDOM.render(<App />, rootEl);
</script>
```
