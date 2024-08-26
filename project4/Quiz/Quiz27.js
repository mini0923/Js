// Quiz 27
// 주사위를 10번 던지고, 각 결과를 배열에 저장하세요.
let arr = [];

for (let i = 0; i < 10; i++){
  let result = Math.floor(Math.random() * 6)+1;
  arr.push(result);
}

console.log("10번 던진 결과:" );
console.log(arr);