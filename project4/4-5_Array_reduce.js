// reduce: 배열의 요소를 순회하며 누적값을 계산

var points = [40, 100, 1, 5, 25, 10];

// 첫번째 인자: 계산식을 정의한 함수
// 두번째 인자: 초기값(여기서는 0)
var sum = points.reduce(

  // total : 누적값, currentValue: 현재 요소
  function (total, currentValue) {
    return total + currentValue;
  }


, 100);

// 배열 요소의 합계를 계산하여 반환
console.log(sum);
