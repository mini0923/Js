// Number 객체: 숫자를 생성, 조작, 계산 하는 함수를 제공

// 숫자를 문자로 변환하는 함수
let num1 = 123;
let str = num1.toString(); // "123"
console.log(typeof num1); // "number"
console.log(typeof str); // "string"

// 소숫점 몇번째자리까지 보여줄지 결정
// 해당위치에서 반올림한 값을 반환
// 인자: 자리수(소수점 밑자리만 선택가능)
let num2 = 10.656;
console.log(num2.toFixed(0)); // 11
console.log(num2.toFixed(2)); // 10.66


// 정수와 소수를 포함해서 몇번째자리까지 보여줄지 결정
console.log(num2.toPrecision()); // 10.656 (그대로)
console.log(num2.toPrecision(2)); // 11
console.log(num2.toPrecision(4)); // 10.66

// 문자열을 숫자로 변환하는 함수
console.log(parseInt("-10"), typeof parseInt("-10")); // -10 number
console.log(parseInt("12.33")); // 12
// 10 (시작하는 부분에 숫자가 있으면 반환 가능)
console.log(parseInt("10 years")); 
console.log(parseInt("years 10"));  // NaN

// isNaN : 문자열이 숫자로 변환가능한지 확인하는 함수
console.log(isNaN("aa")); // true (변환 불가능)
console.log(isNaN("10")); // false (변환 가능)

// 문자열을 실수로 변환하는 함수
console.log(parseFloat("12.33")); // 12.33





