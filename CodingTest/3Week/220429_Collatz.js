
function solution(num) {
  var answer = 0;

  while (num !== 1) {
    num = num % 2 == 0 ? num / 2 : num * 3 + 1
    answer++;

    if (answer > 500) return -1;
  }

  return answer;

}



// 재귀함수를 이용한  답안. 
// 1. 함수 자체를  num과 count=0을 변수로 받음 
// 2. 숫자가 1이면  count기준으로 -1, count를 리턴한다. 
// 3. 재귀함수로 num값을 짝수일때, 홀수일때를 3항연산자로 넣고, 카운트를 늘린다.
function collatz(num, count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}




