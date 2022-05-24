

const s = "a B zd"
const n = 4

function solution(s, n) {
  var answer = '';

  //  string 분리
  const tmpArr = new Array()
  for (i = 0; i < s.length; i++) {
    tmpArr.push(s.charAt(i).charCodeAt());
  }

  console.log(tmpArr)


  const result = tmpArr.map(el => {
    if (el >= 65 && el <= 90) {
      return (el + n) > 90 ? 65 + (n - 1) : el + n
    } else if (el === 32) {
      return el
    } else {
      return (el + n) > 122 ? 97 + (n - 1) : el + n
    }
  })

  result.forEach(element => {
    answer += String.fromCharCode(element)
  })



  return answer;
}



console.log(solution(s, n));