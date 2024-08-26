// let date1 = new Date();

// var year = date1.getFullYear();
// var month = date1.getMonth();
// var date = date1.getDate(); 
// var hour = date1.getHours();
// var minute = date1.getMinutes();
// var second = date1.getSeconds();

// console.log("현재 날짜와 시간: " + `${year}-${month+1}-${date} ${hour}:${minute}:${second}`);

// let date2 = new Date(2024,0,1,9,0,0);
// date2.setDate(date2.getDate() + 10); 
// console.log("10일 후 날짜 :" + date2.toLocaleString() );

// console.log("1시간 30분 후의  시간: " + `${year}-${month+1}-${date} ${hour+1}:${minute+30}:${second}`);

// Quiz13
const now = new Date();
const date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

console.log("현재 날짜와 시간:" , date + " " + time);

// Quiz14
const startDate = new Date("2024-01-01");
const add = 10;

//날짜 계산
startDate.setDate(startDate.getDate() + add);
console.log("10일 후 날짜: " + startDate.toLocaleString());

// Quiz 15
const currentTime = new Date();

// 1시간 30분 더하기
currentTime.setHours(currentTime.getHours() + 1);
currentTime.setMinutes(currentTime.getMinutes() + 30);

console.log("1시간 30분 후의 시간: " + currentTime.toLocaleString());
