// 객체형 배열
var persons = [
  { name: "유재석", points: 78, city: "서울" },
  { name: "김종국", points: 92, city: "서울" },
  { name: "양세찬", points: 76, city: "제주" },
  { name: "하하", points: 81, city: "서울" }
];

// filter() 함수: 조건을 만족하는 요소들만 모아 새 배열을 반환
// 인자: 조건을 정의하는 함수

// 점수가 80점 이상인 사람들만 반환
let pass = persons.filter(
  function (person){
    return person.points >= 80;
  }

);

console.log(pass);


