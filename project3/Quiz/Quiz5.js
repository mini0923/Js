// Quiz5

// 5-1
// 반복문을 사용하여 1부터 10까지 수 중에서 짝수만 출력하세요

for(let i = 1 ; i <= 10; i++){
  if(i % 2 == 0){
    process.stdout.write(i + " ");
  }
};

console.log();

// 5-2
// 반복문을 사용하여 1부터 10까지 수 중 홀수만 큰 수부터 출력하세요.

for(let i = 10 ; i >= 1; i--){
  if(i % 2 == 1){    
    process.stdout.write(i + " ");
  }
};

console.log();

// 5-3
// 반복문을 사용하여 1부터 10까지 수의 합을 출력하세요

let sum = 0;

for (let i = 1; i <= 10; i++){
  sum = sum + i;
}
console.log(sum);

// 5-4
// 반복문을 사용하여 1부터 20까지 수 중에서 3의배수 또는 5의 배수의 합을 구하세요

let sum2 = 0;

for (let i= 1; i <= 20; i++){
  if (i % 3 == 0 || i % 5 == 0){
    sum2 += i;
  };  
};
console.log(sum2);


