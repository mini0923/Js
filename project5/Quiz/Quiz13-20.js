// Quiz 13

var person = {
  name : "아리",
  age : 17,
};

console.log(`Quiz 13 : ${person.name}의 나이는 ${person.age} 입니다.`);

// Quiz 14
var multiple = {
  a : 10,
  b : 20,
};

console.log(`Quiz 14 : ${multiple.a} 과 ${multiple.b}을 곱한 결과는 ${multiple.a * multiple.b} 입니다.`);

// Quiz 15
var avg = {
  a : 10,
  b : 20,
};

console.log(`Quiz 15 : ${avg.a}과 ${avg.b}의 평균은 ${(avg.a + avg.b) / 2} 입니다.`);

// Quiz 16
var country = {
  cityName : "서울",
  population : 9736000
}
console.log(`Quiz 16 : ${country.cityName}의 인구는 ${country.population} 명 입니다.`);

// Quiz 17
var student = {
  name : "소영",
  score : 75,
}

console.log("Quiz 17 : 점수가 60점이면 합격이고, 그렇지 않으면 불합격입니다.");

if (student.score >= 60){
  console.log(`${student.name}의 점수는 ${student.score}점으로 합격입니다.`);
} else {
  console.log(`${student.name}의 점수는 ${student.score}점으로 불합격입니다.`);
}

// Quiz 18

var key1 = "make";
var key2 = "model";
var key3 = "year";

var car = {
  [key1] : '현대',
  [key2] : '쏘나타',
  [key3] : 2021,
}
console.log(`Quiz 18 : 제조사 : ${car.make}, 차량명 : ${car.model}, 연식 : ${car.year}`);

// Quiz 19
var person = {
  name : '철수',
  age : '21',
};

var property = "address";
person[property] = "인천 남동구 만수동";
console.log("Quiz 19 : ");
console.log(person);

// Quiz 20
var key1 = "productName";
var key2 = "productPrice";

var product = {};

product[key1] = "필통";
product[key2] = 5000;
console.log("Quiz 20 : ");
console.log(product);

