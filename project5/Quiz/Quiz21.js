// Quiz 21 

let original = {
  title : "위대한 개츠비",
  author : "스콧 피츠제럴드",
  publishedYear : 1925,
}
console.log(`원본객체 : ${JSON.stringify(original)}`);

let deep = JSON.stringify(original);
let copy = JSON.parse(deep);

console.log(`복사된객체: ${JSON.stringify(copy)}`);

let { publishedYear : year } = original;

console.log("원본객체의 출판년도 : " + year);

copy.publishedYear = 2023; 

console.log("복사된객체의 출판년도 : " + copy.publishedYear);

