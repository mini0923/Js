// Set : 중복되지 않는 값들을 저장하는 객체

var mySet = new Set();

// 새로운 값 추가
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 중복된 값 추가 해보기
mySet.add(1);
console.log(mySet); // 이미 1이 저장되어 있어서 추가안된다.


// set의 크기 
console.log(mySet.size);

// 값이 있는지 확인
console.log(mySet.has(1)); // true;

// 특정 값을 삭제
mySet.delete(2);
console.log(mySet);

// set에 저장된 모든 값을 출력
// forEach : set의 모든 요소를 순회하며 함수실행
mySet.forEach(function (item) {
  console.log(item);
  
});

// for of 반복문을 사용하여 Set 순회
for (let value of mySet){
  console.log(value);
}

// 저장된 모든 값을 삭제
mySet.clear();  // 매개변수 없음
console.log(mySet); // Set{}


