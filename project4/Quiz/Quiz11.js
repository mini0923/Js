// Quiz 11

const students = [
  { name : "김철수", score: 85, gradeLevel : "1학년"},
  { name : "이영희", score: 92, gradeLevel : "2학년"},
  { name : "박지훈", score: 76, gradeLevel : "3학년"},
  { name : "최유리", score: 88, gradeLevel : "1학년"},
  { name : "정민호", score: 54, gradeLevel : "1학년"},
  { name : "한서연", score: 63, gradeLevel : "2학년"},
  { name : "장동건", score: 71, gradeLevel : "3학년"},
  { name : "오지호", score: 80, gradeLevel : "3학년"},
];

// 새로운 key:value 를 추가하기 위해서 map 함수 작성
let addGrade = students.map(
  function (gradeAdd){
    // 신규 key:value를 저장할 변수 생성
    let newGrade = '';
    // 조건문 작성 90점이상이면 'A', 71점이상, 89점이하라면 'B', 이외에 값은 'C'
    if(gradeAdd.score >= 90){
      newGrade = 'A';
    } else if (gradeAdd.score >= 71 && gradeAdd.score <= 89){
      newGrade = 'B';
    } else {
      newGrade = 'C';
    }

    return {
      name : gradeAdd.name,
      score : gradeAdd.score,
      gradeLevel : gradeAdd.gradeLevel,
      // 신규 key : value 작성
      grade : newGrade,
    };
  }
)

console.log("등급이 추가된 학생 목록: ");
console.log(addGrade);

// 점수가 높은순으로 정렬
let desc = addGrade.sort(

  function (a, b){
    return b.score - a.score;
  }

);

console.log("정렬된 학생 목록: ");
console.log(desc);


// 등급이 'B'이면서, 1학년인사람 필터링
let filtered = addGrade.filter(el => el.grade == 'B' && el.gradeLevel == '1학년')

// 필터링(등급이 'B'이면서, 1학년인사람 필터링)한 부분에서 점수 총합 구하기.
let sum = filtered.reduce(
  
  function(total, currentValue){
    return total + currentValue.score;
  }
,0);

console.log("필터링된 학생 목록: ");
console.log(filtered);

console.log("1학년 중 등급이 'B'인 학생들의 점수 총합: ");
console.log(sum);
