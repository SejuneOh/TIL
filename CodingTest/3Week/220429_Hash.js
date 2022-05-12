
/*
  1. hash의 원리 ?
    key와 value값을 가지고 검색하는  방식으로 key값으로 hashing code를 생성하여 해당 배열에서 해당  특정 코드만 찾으면 빠르게 검색할 수 있다. 
    즉, key 값이  찾고자 하는 배열의 index의 값으로 변환되어 들어가기 때문에서 순차적으로 검색하는 일반 배열 보다 검색이 빠르다.

  2. hasing code란? 
    key가 찾고자 하는 배열의 index로 들어갈때, 문자, 숫자, 상관없이  합리적으로 code를 생성하는  방식이다.
    해당 방식은 개발자마다 생성 방식이 다르며, 예를 들어 문자열을 아스키코드로 변경하여  인덱스를 정할 수 있다.
  
  3. 단점? 충돌? 
    hash 알고리즘에서 hash code를 구하는 방식이, 중복이 가능하여 hash code가 중복되어 같이 접근하는 경우, 혹은 같은 결과넣는 배열에 index가 많은 값들 있는 경우.
    충돌이 발생한다.

  4. 충돌 해결방법 ?
    1. 충돌이 일어났을 때 데이터들 값의 메모리 주소를 연결하여 중복을 해결하는 방법(linked) 아직 모르겠다... 아무 고유 주소값을 연결해서 중복 방지를 한다는 뜻 같음 
    2. key 값을 포인터로 연결 -> key값 자체를 메모리 주소로 index를 하는 듯한데... 어렵다.
    3. open adressing 
      3-1. 주소의 값이 있다면.  다음 인덱스에 임이의 값을 넣어 주는 방식이며, 하지만 이것 또한 중복의 연속으로 발생할 수있다.
      3-2. 방이있다면 제곱을 더해서 인덱스를 열어주는 방식 

    조금더 ... 공부해야겠다 ... 

*/



const runner = ["leo", "kiki", "eden"];
const complete = ["eden", "kiki"]

console.log(solution2(runner, complete));


// hashtable을 꼭 써야하는가 ?
// indexing을 할때 코드를 쓰면 for문을 2번 도는데 ? 느려질텐데
// 다른 방법을 사용해보자 Map()을 사용해서 풀자
function solution(participant, completion) {
  var answer = '';
  var table = [];

  completion.forEach(el => {
    // console.log(el.charCodeAt(1));
    let code = getCode(el);
    table[code] = false;
  });


  participant.forEach(el => {
    let code = getCode(el);

    if (table[code] === false) {
      table[code] = true;
    } else {
      answer = el;
    }
  });

  // parseInt, charCodeAt 
  function getCode(el) {
    // 여기서 시간 타임 아웃
    return (el.charCodeAt(1) + el.charCodeAt(2) + el.charCodeAt(3)) / 10;
  }

  return answer;
}

function solution2(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]
    }
  }
}


// 이거 연구해보자 !! 대박 !!!!!! 
// var solution=(_,$) => _.find( _=> !$[_]--, $.map(_=>$[_] = ($[_]|0)+1) )


