// Quiz 18

// 18-1
let read = new Set();

read.add("해리포터");
read.add("반지의 제왕");
read.add("어린왕자");
read.add("데미안");
read.add("1984");
read.add("위대한 개츠비");

console.log("현재 읽은 책 목록 : ");

read.forEach(function(item){
  console.log(item);
});

// 18-2
read.forEach(function(item){
  if(item.length >= 7){
    read.delete(item)
  }
});

console.log();

console.log("위대한 개츠비을(를) 책 목록에서 삭제했습니다.");

console.log();

// 18-3
let frRead = new Set();

frRead.add("어린왕자");
frRead.add("1984");
frRead.add("노인과 바다");
frRead.add("그리스인 조르바");

console.log("친구가 읽은 책 목록 : ");

frRead.forEach(function(item){
  console.log(item);
});

console.log();

console.log("두 명의 사용자가 공통으로 읽은 책 : ");

read.forEach(function (a,b){
  if(read.has(a) == frRead.has(b)){
    console.log(a);
  }
});
