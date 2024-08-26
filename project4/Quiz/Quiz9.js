// Quiz 9

const arr = ["apple", "banana", "grape", "kiwi", "watermelon"];

// 배열 내 글자 수 추출
let length = arr.map(str => str.length);
// console.log(length);

// 5글자 이상 되는 글자 추출
let str = arr.filter(str => str.length> 5);
// console.log(str);

// 배열이므로, map 을 통해 toUpperCase() 사용해야함.
let result = str.map(

  function(stred){
    return stred.toUpperCase();
  }

);

console.log("최종 결과 : " + result);
