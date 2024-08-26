let student = new Map();

student.set("김민준", { grade: "2학년", major: "컴퓨터공학" });
student.set("이서윤", { grade: "3학년", major: "경영학" });
student.set("박지호", { grade: "1학년", major: "물리학" });
student.set("최지민", { grade: "4학년", major: "화학" });
student.set("정예린", { grade: "2학년", major: "수학" });
student.set("한지우", { grade: "3학년", major: "영어영문학" });
  

console.log("학생 목록:");
for (let [name, info] of student) {
  console.log(`${name}: ${info.grade}, ${info.major}`);
}
console.log();

for (let [name, info] of student) {
  if(info.grade === "3학년"){
    info.major = "융합공학";
  }
}
console.log();

const searchName = "정예린";
if (student.has(searchName)) {
  const info = student.get(searchName);
  console.log(`${searchName}: ${info.grade}, ${info.major}`);
} else {
  console.log("해당 학생 정보가 없습니다.");
}
console.log();

// 학년별 학생 수 계산

// 학생의 수를 저장하는 새로운 MAP 생성
const gradeCounts = new Map();
for (let [name, info] of student) {
  const grade = info.grade;

  // 기존 값이 없으면 1로 초기화, 있으면 + 1
  if (gradeCounts.has(grade)) {
    let count = gradeCounts.get(grade);
    gradeCounts.set(grade, count+1);
  } else {
    gradeCounts.set(grade, 1);
  }
}

console.log("학년별 학생 수:");
for (let [grade, count] of gradeCounts) {
  console.log(`${grade}: ${count}명`);
}
