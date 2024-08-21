/* 함수 선언식 */
hello();  // 함수명();

function hello() {
  console.log("안녕하세요~");
    
}

// 매개변수와 반환값이 있는 함수 선언
function sum(x, y) {
  return x + y;
}

const result = sum(1, 5);

console.log(result);

/* 함수 표현식 */

const hi = function () {
  console.log("안녕~");
}

// 함수 호출
hi(); // 변수이름();