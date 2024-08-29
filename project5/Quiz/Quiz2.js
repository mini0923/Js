// Quiz 2
function calculateGrade(name, ...rest){
  
  // 총점
  let total = 0;

  //평균
  let avg = 0;

  // 총점 구하기
  for (let x of rest){
    total += x;
  }

  // 평균 구하기
  avg = total / 3 ;

  // 소수점 2번째 반올림
  avg = Math.round(avg * 100)/ 100;
  
  // 출력 내용
  console.log (`${name}님의 평균 성적은 ${avg}점 입니다.`);
}

calculateGrade("철수", 85,90,78);
calculateGrade("훈이", 80);
