
const arr = [5, 9, 7, 10];
const divisor = 5;

console.log(`배열은 : ${arr} 이고,  divisor : ${divisor} 입니다.`);
console.log(solution_1(arr, divisor));



function solution(arr, divisor) {
  var answer = [];

  if (Array.isArray(arr)) {
    arr.forEach(el => {
      if (el % division == 0) {
        answer.push(el);
      }
    });

    if (answer.length == 0)
      answer.push(-1)
  }
  // 
  answer.sort((a, b) => a - b);

  return answer
}


function solution_1(arr, divisor) {
  var answer = [];


  arr.forEach(el => {
    if (el % divisor == 0) {
      answer.push(el);
    }
  });

  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
