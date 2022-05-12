

console.log(solution(3, 5));


function solution(a, b) {
  var answer = 0;

  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for (min; min <= max; min++) {
    answer += min;
  }

  return answer;
}