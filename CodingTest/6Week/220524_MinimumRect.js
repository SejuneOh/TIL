
// 가로, 세로
const size = [[60, 50], [30, 70], [60, 30], [80, 40]];

function solution(sizes) {
  let wmax = 0;
  let hmax = 0;

  // forEach
  const sortArr = sizes.map(arr => {
    //  정렬
    arr.sort((a, b) => a - b);

    //  정렬된 값 중
    wmax = wmax > arr[0] ? wmax : arr[0];
    hmax = hmax > arr[1] ? hmax : arr[1];

    return [wmax, hmax]
  });

  return wmax * hmax;
}


