let str = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아"

console.log(str.replace("나쁜", "XX").replace("더러운", "XXX"));



const forbiddenWords = ["나쁜", "더러운"];

let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아.";

for (let word of forbiddenWords){
  message = message.replaceAll(word, "X".repeat(word.length));
}

console.log(message);
