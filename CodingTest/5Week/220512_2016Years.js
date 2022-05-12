

console.log(solution(5, 24));

function solution(a, b) {
  var answer = '';
  var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  answer = day[new Date(`2016-${a}-${b}`).getDay()]


  return answer;
}