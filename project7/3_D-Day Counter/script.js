// 타이머 실행시 생성되는 Interval ID를 저장할 배열
let intervalIdArr = [];

// 스토리지에 저장된 디데이 꺼내기
let savedDate = localStorage.getItem("saved-date");

// 브라우저가 처음 로드할 때, 저장된 날짜가 있다면
// 바로 타이머 시작하기
if (typeof savedDate != "null") {
  console.log(savedDate);
  // 이전에 설정한 디데이를 전달하여 타이머 시작
  start(savedDate);
} else {
  console.log("저장된 날짜가 없습니다.");
}

// 사용자가 입력한 D-Day를 가져오는 함수
function getDday() {
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
};

// 남은 시간을 계산하고 화면에 표시하는 함수

function count(dday) {
  // 남은 시간 계산: 디데이 - 현재시간

  // 현재 시간 가져오기
  const now = new Date();

  // 목표 날짜 자정으로 (00:00:00) 설정
  const target = new Date(dday).setHours(0, 0, 0, 0);

  // 남은 시간: 목표날짜 - 현재 시간
  // 1s -> 1000ms 
  const remaining = (target - now) / 1000;

  if (remaining <= 0 || isNaN(remaining)) {
    console.log("잘못된 날짜가 들어왔습니다.");
    return;
  }

  // 남은시간을 (일, 시간, 분, 초)로 계산하기
  const remainObj = {
    date: Math.floor(remaining / 3600 / 24),
    hour: Math.floor(remaining / 3600) % 24,
    min: Math.floor(remaining / 60) % 60,
    sec: Math.floor(remaining) % 60,
  }
  // console.log(remainObj);

  // 남은 시간을 화면에 표시
  document.getElementById("day").textContent = remainObj.date;
  document.getElementById("hour").textContent = remainObj.hour;
  document.getElementById("min").textContent = remainObj.min;
  document.getElementById("sec").textContent = remainObj.sec;


};

// 타이머 시작함수

// 함수 호출 시 전달받은 인자에 따라 분기문으로 처리
// 전달받은 인자가 있다면? 브라우저 로드 시 타이머가 실행된 것
// 없으면? 사용자가 새로운 D-Day를 입력한 후 실행된 것
function start(prevDate) {
  // 사용자가 입력한 디데이 가져오기

  let dday = null;

  // 사용자가 디데이를 입력하고 시작 버튼 클릭
  if (prevDate === undefined) {
    // 새로운 디데이를 스토리지에 설정, 새로운 날짜를 스토리지에 교체
    dday = getDday();
    localStorage.setItem('saved-date', dday);
  } else {
    // 브라우저 로드 시 실행
    dday = prevDate;
  }


  // setInterval 함수를 사용하여 1초 간격으로 타이머 설정
  // setInterval(반복적으로 처리할 함수, 반복주기)
  // 타이머 ID 반환
  const intervalId = setInterval(() => {
    count(dday);
  }, 1000);

  console.log("타이머 아이디", intervalId);

  // 생성된 타이머 아이디를 배열에 추가
  intervalIdArr.push(intervalId);


}


function stop() {
  // 모든 타이머 중지
  for (let i = 0; i < intervalIdArr.length; i++) {
    // 타이머를 종료하는 함수
    let id = intervalIdArr[i];
    clearInterval(id);
  }
  // 배열 비우기
  intervalIdArr = [];
}

function reset() {
  // 모든 타이머 삭제
  stop();

  // 남은 시간을 0으로 초기화
  document.getElementById("day").textContent = 0;
  document.getElementById("hour").textContent = 0;
  document.getElementById("min").textContent = 0;
  document.getElementById("sec").textContent = 0;

  // 스토리지에서 날짜 삭제
  localStorage.removeItem('saved-date');
}