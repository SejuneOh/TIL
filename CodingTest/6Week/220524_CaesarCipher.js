


const s = "P"
const n = 15

function solution(s, n) {
  var answer = '';

  //  string 분리
  const tmpArr = new Array()
  for (i = 0; i < s.length; i++) {
    // 아스키코드 변환
    tmpArr.push(s.charAt(i).charCodeAt());
  }
  const result = tmpArr.map(el => {
    // 소문자
    if (el >= 65 && el <= 90) {
      return (el + n) > 90 ? el + n - 26 : el + n
      // 공백
    } else if (el === 32) {
      return el
      // 대문자
    } else {
      return (el + n) > 122 ? el + n - 26 : el + n
    }
  })

  result.forEach(element => {
    answer += String.fromCharCode(element)
  })



  return answer;
}



console.log(solution(s, n));