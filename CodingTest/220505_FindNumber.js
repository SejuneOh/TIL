


console.log(solution("one4seveneight"));

function solution(s) {
  var answer = s;
  let Arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  Arr.forEach(el => {
    let tmp = 0;
    if (s.includes(el)) {
      answer = answer.replace(el, Arr.indexOf(el));
    }
  })



  return parseInt(answer);
}