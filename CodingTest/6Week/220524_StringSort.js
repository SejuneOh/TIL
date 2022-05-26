

// 2차원 배열의 sort는 첫번째 인자, 두번째 인자 순으로 정렬한다. 
// 2가지 조건이 만족함
// const strings = ["sun", "bed", "car"]

const strings = ["abce", "abcd", "cdx"]
const n = 2

function solution1(strings, n) {
  var answer = [];
  answer = strings.map(el => {
    return [el.charAt(n), el];
  }).sort().map(el => el[1]);

  return answer;
}



console.log(solution2(strings, n));