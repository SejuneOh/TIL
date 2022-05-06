
//Set() :  자료형 상관 없이 원시값과 참조 값의 유일값만 저장한다. 
// NaN: 원래 NaN !== NaN 이었지만 같은 값으로 변경되었다.



solution2(5, [2, 4], [1, 3, 5]);

// 1. 답은 맞았는데  정확도가 떨어짐

function solution1(n, lost, reserve) {
  var answer = 0;

  // 1. Set객체 선언
  let lostSet = new Set(lost);
  let reserveSet = new Set(reserve);


  // 2. 중복읠 제외하기 위해서 차집합을 구해보자
  var difLost = new Set([...lostSet].filter(x => !reserveSet.has(x)));
  var difRes = new Set([...reserveSet].filter(x => !lostSet.has(x)));

  difRes.forEach(x => {
    let tmp = difLost.values()
    let val = tmp.next().value;
    if (x - val === 1 || x - val === -1)
      difLost.delete(val)
  });




  return n - difLost.size;
}



// 무엇이 문제이지 ... ???
// 같이 고민해보자...
function solution2(n, lost, reserve) {

  var difLost = new Set([...lost].filter(x => !new Set(reserve).has(x)));
  var difRes = new Set([...reserve].filter(x => !new Set(lost).has(x)));

  difRes.forEach(x => {
    let val = difLost.values().next().value;
    if (x - val === 1 || x - val === -1)
      difLost.delete(val);
  });

  return n - difLost.size;
}
