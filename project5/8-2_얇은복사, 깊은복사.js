// 여러가지 방법으로 객체 복사하기

let obj = { name : "짱구" , age : 5 };

// 얕은 복사 : 단순히 객체 복사
let copyObj = obj;  // obj의 참조주소가 복사됨
copyObj.name = "훈이";

console.log(obj); // Copy한 객체로 이름을 변경하면, 원본 객체의 이름도 변경된다.
console.log(copyObj);

// 스프레드 연산자를 사용한 얕은 복사: 새로운 객체를 생성
let copyObj2 = {...obj};
copyObj2.name = "짱아";

console.log(obj);
console.log(copyObj2);  // Copy한 객체는 별도의 객체라서 원본 객체는 영향을 받지 않는다.

// 복잡한 객체 복사하기 (객체 안에 객체가 있는 경우)
let origin = {
  name : "짱구",
  age : 5,
  favoriteFood: {
    first: "햄버거",
    second : "피자",
  }
};

let copy = {...origin};

console.log(copy);

copy.favoriteFood.first = "마라탕";

console.log(origin.favoriteFood);
console.log(copy.favoriteFood);
// favoriteFood 객체도 참조타입이기 때문에, 스프레드 연산자를 사용해도 동일한 주소가 복사된다.

// 깊은 복사 : 객체를 완벽하게 복사하기
// stringify() : 객체를 JSON 문자열로 변환
let copy2 = JSON.stringify(origin);

// parse(): JSON 문자열을 다시 객체로 변환
let deepCopy = JSON.parse(copy2); // "" -> {}

deepCopy.favoriteFood.first = "탕후루";
console.log(origin.favoriteFood);
console.log(deepCopy.favoriteFood);

// 이 과정에서 모든 참조 객체가 값으로 변환되어 (주소x) 완전히 새로운 객체가 생성된다.
