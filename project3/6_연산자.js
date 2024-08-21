/* 연산자 */

// 대입 연산자
let x = 1;  // x 에 1를 저장

// 비교 연산자
console.log(1 == 2);
console.log(1 != 2);
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1"); // 값만 비교
console.log(1 === "1"); // 값과 자료형이 모두 비교

// 산술연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// 문자열 결합 연산자
console.log("좋은" + "하루되세요!");

// 부호 연산자
console.log(-x);  // 부호를 반대로 변경하여 음수를 출력
console.log(x);   // 원본데이터에는 영향이 없음.

// 증감 연산자
console.log(++x); // 1 -> 2
console.log(x++); // 2
console.log(--x); // 3 -> 2
console.log(x--); // 2

// 논리연산자
console.log(true && true);    //true
console.log(true && false);   //false
console.log(true || true);    //true
console.log(true || false);   //true
console.log(!true);           //false

// 삼항연산자
let point = 92;

// 점수가 90점 이상이면 pass 아니면 fail
let grade = point >= 90 ? "pass" : "fail"

console.log(grade);

//typeof 연산자 : 값의 타입을 확인하는 연산자
console.log(typeof "42");           // 'string'
console.log(typeof 42);             // 'number'
console.log(typeof 1.123);          // 'number'
console.log(typeof true);           // 'boolean'
console.log(typeof function() {});  // 'function'
console.log(typeof undefined);      // 'undefined'
console.log(typeof null);           // 'object'
console.log(typeof {});             // 'object'
console.log(typeof []);             // 'object'
