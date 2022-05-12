
function solution(arr1, arr2) {
  var answer = new Array();

  for (i = 0; i < arr1.length; i++) {
    var arr = [];

    for (j = 0; j < arr1[i].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  console.log(answer);
  return answer;
}


solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]);