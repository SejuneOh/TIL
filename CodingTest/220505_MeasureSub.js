

console.log(solution2(12));

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}



//재귀함수를 대단히 많이 사용하는군....
function solution2(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, b += n % a ? 0 : a);
}