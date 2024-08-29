// fetch: 서버와 데이터를 주고받기 위한 API 호출 함수

// 인자: 서버주소(URL), HTTP 메소드, 전송할 데이터 등
// GET 방식은 생략 가능

// fetch 함수는 자체적으로 promise 객체를 생성하여 반환하기에,
// 뒤에 then 또는 catch 함수를 이어서 사용할 수 있다.

// fetch("http://192.168.0.67:8080/board/read?no=1")
// .then((response) => response.json())  // 응답데이터를 객체로 변환.
// .then((json) => {console.log(json)}); // 변환한 데이터 출력

// POST - 새로운 게시물 생성
// fetch("http://192.168.0.67:8080/board/register", {
//   method : "POST",
//   body : JSON.stringify(
//   {
//     title : "가입인사",
//     content : "안녕하세요",
//     writer : "user",
//   }), // 전송할 게이터
//   headers : {
//     "content-type" : "application/json; charset=UTF-8" 
//   }
// })
// .then((response) => response.text()) // 응답이 단순한 텍스트일 때
// .then((text) => {console.log(text)});

// PUT - 본인이 작성한 게시물 수정
// fetch("http://192.168.0.67:8080/board/modify", {
//   method : "PUT",
//   body : JSON.stringify(
//   {
//     no: 31,
//     title : "zi존주환",
//     content : "ㅎㅇㅎㅇ",
//     writer : "zi존홍율",
//   }), // 전송할 게이터
//   headers : {
//     "content-type" : "application/json; charset=UTF-8" 
//   }
// })
// .then((response) => console.log(response.status));

// DELETE - 본인 게시물 삭제
for (let i = 1 ; i < 30; i++){
  fetch(`http://192.168.0.67:8080/board/remove?no=${i}`, {
    method: "DELETE"
  })
  .then((response) => console.log(response.status));
}