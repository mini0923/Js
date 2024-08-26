// Quiz 7
let arr = [10, 15, 20, 25, 30];

// filter 를 통해 20보다 큰 수를 추출
let test = arr.filter(

  function(arr){
    return arr > 20;
  }
);

// map를 통해 추출한 값 에 2를 곱함
let sum = test.map(el => el * 2);


console.log("결과 : " + sum);
