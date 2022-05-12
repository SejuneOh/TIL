

// 유클리드 호제법 
//  두 수 a,b에서 최대공약수(g)와 최소공배수(l)는 다음 관계가 성립한다.
//  ab = gl
//  최소 공배수를 구할 수 있으면,  최대공약수는 ab/g = l 공식이 나온다.
console.log(solution(3, 12));

function solution(n, m) {
  var answer = [];

  // 최대공약수
  let gcd = (n, m) => {
    let max = Math.max(n, m);
    let min = Math.min(n, m);

    return max % min === 0 ? min : gcd(min, max % min)
  }

  const gcdResult = gcd(n, m);


  console.log(gcdResult);
  answer[0] = gcdResult;
  answer[1] = (n * m) / gcdResult;

  console.log(answer);
  return answer;
}