/* while 문 */

// 숫자 1 ~ 10 출력하기!

let i = 1;  // 초기화식

while (i <= 10){
  console.log(i);
  i++;  // 증감식
}

// 동전 교환기에 지폐를 넣고 교환하기

let inputPrice = 7000; // 사용자가 넣은 지폐금액
let coinUnit = 500;
let coinCount = 0; // 동전 개수

while(inputPrice > 0){
  inputPrice -= coinUnit;
  coinCount++;
}

console.log("7000원을 동전 " + coinCount + " 개로 변경함.");


/* for문 */

// 초기화식, 조건식, 증감식

for(let i = 1; i <= 10; i++){
  console.log(i);
}

let brand = ["애플", "구글", "페이스북", "아마존", "삼성전자"]
console.log(brand[0]);
console.log(brand[1]);
console.log(brand[2]);
console.log(brand[3]);
console.log(brand[4]);

for(let i = 0; i < 5; i++){
  console.log(brand[i]);
}

// 음료수 자판기에서 음료 찾기
let productList = [
  {name: "솔의눈", price : 700},
  {name: "커피", price : 700},
  {name: "파워에이드", price : 1200},
  {name: "오렌지", price : 1000},
  {name: "보리차", price : 1200},
  {name: "밀키스", price : 800},
];

// 800원으로 구매할 수 있는 음료수 찾기
let inputCoin = 800;
let outputList = [];

for (let i = 0; i < productList.length; i++){
  // 800원으로 살수있는 물건 찾기
  if(productList[i].price <= inputCoin){
    outputList.push(productList[i]);
  }
}

console.log(outputList);

/* for-in 문 */

let arr = [3, 4, 5];

// 배열을 순회하면서 index를 꺼냄
for(let i in arr){  // 변수 in 배열
  console.log(i + ", " + arr[i]);
}

/* for-of문 */
for (let v of arr) {
  console.log(v);
  
}






