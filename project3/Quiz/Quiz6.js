//Quiz 6
// 배열에 있는 모든 숫자를 더해서 합을 구하세요

let sum = 0;

const arr = [1, 'aa', true, 5, 10];

for (let i = 0; i <= arr.length; i++){
  if(typeof arr[i] === 'number'){
    sum += arr[i]
  }
};
console.log(sum);
