

/*
  1. stack이란 ?
    자료구조에서 LIFO의 선형의 자료 구조이다.
  
*/



const a = [93, 30, 55]
const b = [1, 30, 5]

solution(a, b);

function solution(progresses, speeds) {
  var answer = [];
  var dayls = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = (100 - progresses[i]) / speeds[i];
    dayls.push(day);
  }

  console.log(dayls);

  return answer;
} 