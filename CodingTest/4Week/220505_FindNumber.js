


console.log(solution("one4seveneight"));

function solution(s) {
  var answer = s;
  let Arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (i = 0; i < Arr.length; i++) {

    //1. 문자열에, 배열의 영어가 있는지 확인하다.
    if (Arr.includes(Arr[i])) {
      //2. 문자열 값이 있는 경우, 해당 문자를, 인덱스로 치환한다. 
      answer = answer.replace(Arr[i], i);
    }
  }

  return parseInt(answer);
}