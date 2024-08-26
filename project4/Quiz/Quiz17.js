// Quiz 17

// 시청한 영화 목록을 Set 객체로 생성하세요
let watched = new Set();


// 보고싶은 영화 목록을 Set 객체로 생성하세요
let wanted = new Set();

// 시청한 영화 목록과 보고싶은 영화 목록을 각각 출력하세요
watched.add("인셉션");
watched.add("매트릭스");
watched.add("인터스텔라");
// const watched = new Set(["인셉션", "매트릭스", "인터스텔라"]);

console.log("시청한 영화 목록 : ");
watched.forEach(function (movie) {
  console.log(movie);
});

console.log();
// const wanted = new Set(["파이트클럽", "더 울프 오브 월 스트리트", "노인을 위한 나라는 없다"]);
wanted.add("파이트클럽");
wanted.add("더 울프 오브 월 스트리트");
wanted.add("노인을 위한 나라는 없다");

console.log("보고싶은 영화 목록 : ");
wanted.forEach(function (item) {
  console.log(item);
});

console.log();

// "파이트 클럽" 이라는 영화를 시청했는지 확인하고 없다면, 시청한 영화에 추가하고, 보고싶은 영화에서 삭제하세요
const newMovie = "파이트클럽"
if (!watched.has(newMovie)) {
  watched.add(newMovie);
  wanted.delete(newMovie);
}

console.log(`${newMovie}을(를) 시청한 영화 목록에 추가하고, 보고싶은 영화 목록에서 삭제했습니다.`);

console.log();

// 업데이트된 시청한 영화 목록과 보고싶은 영화 목록을 다시 출력하세요
console.log("현재 시청한 영화 목록 : ");
watched.forEach(function (item) {
  console.log(item);
});

console.log();

console.log("보고싶은 영화 목록 : ");
wanted.forEach(function (item) {
  console.log(item);
});

