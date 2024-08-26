let string = "aaabbc";
let count = 1;

let result = "";

for (let i = 0; i < string.length; i++){
  if (string.charAt(i) === string.charAt(i+1)){
    count++;
  }else {
    result += string.charAt(i) + count;
    count = 1;
  }
}
console.log(result);


const str = "aaabbc";
let compressed = "";  // 압축된 문자
let count2 = 1; // 현재 문자가 몇번 반복되었는지 카운트

for (let i= 0; i < str.length; i++){
  // 현재 문자가 다음문자와 같은지 비교
  if(str[i] === str[i+1]){
    count++;
  }else {
    // 같지 않으면 카운트 종료 및 압축된 문자 추가
    compressed += str[i] + count;
    count = 1;
  }
}
console.log(compressed);
