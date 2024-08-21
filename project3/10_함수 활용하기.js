// 부가세 계산하기

let salePrice = 100000; // 매출
let vat = 0.1; // 부가세 10%
let tax = salePrice * vat;
console.log(tax);


let salePrice2 = 240000 // 매출
let vat2 = 0.1; // 부가세
let tax2 = salePrice2 * vat2;
console.log(tax2);

let salePrice3 = 940000 // 매출
let vat3 = 0.1; // 부가세
let tax3 = salePrice3 * vat3;
console.log(tax3);

// 위 코드의 문제점:
// 함수 없이 부가세를 계산하면 동일한 계산코드가 반복된다.

// 부가세를 계산하는 함수 만들기
// 입력값: ?
// 출력값: ?

function calculateTax(salePrice) {
  let vat = 0.1;
  let tax = salePrice * vat;
  return tax;
}

// 함수를 이용해서 10만원, 24만원, 94만원에 대한 부가세 계산

calculateTax(100000);
calculateTax(240000);
calculateTax(940000);

console.log("10만원에 대한 부가세 : " + calculateTax(100000));
