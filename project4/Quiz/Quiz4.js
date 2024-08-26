let string = "0112233";
let sum = 0;

for(let i = 0; i < string.length; i++){
  sum += parseInt(string[i]);
}
console.log(sum);


let str = "0112233";
let sum2 = 0;

for (let s of str){
  // console.log(s, typeof s); // "0" string
  let num = parseInt(s);  // "0" -> 0
  sum2 += num;
}
console.log(sum2);


// 잘못된 코드
let result = 0;
for (let s of str) {
  result += s;
}

console.log(result);
