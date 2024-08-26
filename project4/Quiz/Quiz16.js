const visits = [
  { name : "김철수", date : "2024-08-20", purpose : "회의"},
  { name : "이영희", date : "2024-08-18", purpose : "상담"},
  { name : "박지훈", date : "2024-08-21", purpose : "회의"},
  { name : "최유리", date : "2024-08-19", purpose : "교육"},
  { name : "정민호", date : "2024-08-17", purpose : "상담"},
];

// visits.sort(

//   function (a,b){
//     return new Date(a.date) - new Date(b.date);
//   }

// );
visits.sort((a,b) => new Date(a.date) - new Date(b.date));

console.log("정렬된 방문 기록 : " );
console.log(visits);

let meeting = visits.filter(el => el.purpose == "회의");

console.log("회의 목적의 방문 기록 : " );
console.log(meeting);

let change = meeting.map(

  function (ch){
    const date = new Date(ch.date);
    return {
      name: ch.name,
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDate(),
      purpose: ch.purpose,
    };
  }

);

console.log("형식이 변환된 방문 기록 : " );
console.log(change);