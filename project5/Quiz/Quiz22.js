// Quiz 22

let original = {
  title : "자바 프로그래밍 입문",
  author : {
    firstName : "은종",
    lastName : "박",
  }
};

console.log(`원본객체 : ${JSON.stringify(original)}`);

let deep = JSON.stringify(original);
let copy = JSON.parse(deep);

console.log(`복사된객체: ${JSON.stringify(copy)}`);

let {lastName : lName} = original.author;

console.log("원본객체의 성 : " + lName);

copy.author.lastName = "김"; 

console.log("복사된객체의 성 : " + copy.author.lastName);

