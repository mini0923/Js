function doJoin() {

  joinArr = [];

  // 아이디 검증 
  let id = document.getElementById("id");
  let idValue = id.value;
  let patt = /^[0-9a-z]{4,8}$/g;

  if (patt.test(idValue)) {
    id.className = "";
  } else {
    id.className = "border-red";
    joinArr.push("아이디는 4~8자 소문자 or 숫자로만 입력해주세요.");
  }

  // 비밀번호 검증
  let pw = document.getElementById("pw");
  let pwValue = pw.value;

  let rePw = document.getElementById("rePw");
  let rePwValue = rePw.value;

  if (pwValue == rePwValue) {
    pw.className = "";
    rePw.className = "";
  } else {
    pw.className = "border-red";
    rePw.className = "border-red";
    joinArr.push("비밀번호 일치하지 않습니다. 다시확인하세요");
  }

  // 관심분야 체크 검증
  let interests = document.querySelectorAll('input[name="interest"]:checked');
  if (interests.length === 0) {
    alert("관심분야를 선택하세요.");
    return;
  }

  addDataToTable();


  if (joinArr.length > 0) {
    alert(joinArr.join("\n"));
    return false;
  } else {
    alert("제출완료")
    return true;
  }


}

// 주민등록번호 확인 함수
function numCheck() {
  let regiArr = [];

  let regi_1 = document.getElementById("regi_1");
  let regi_2 = document.getElementById("regi_2");

  let patt_1 = /^[0-9]{6,6}$/;
  let regi_1Value = regi_1.value;
  let patt_2 = /^[0-9]{7,7}$/;
  let regi_2Value = regi_2.value;

  if (patt_1.test(regi_1Value)) {
    regi_1.className = "";
  } else {
    regi_1.className = "border-red";
    regiArr.push("주민번호 앞자리 다시확인하세요");
  }

  if (patt_2.test(regi_2Value)) {
    regi_2.className = "";
  } else {
    regi_2.className = "border-red";
    regiArr.push("주민번호 뒷자리 다시확인하세요");
  }

  // 주민등록번호 뒷자리로 성별 확인
  let pattValue = patt_2.exec(regi_2Value); // regi_2Value의 값을 배열로 반환(exec)

  if (pattValue[0].charAt(0) == '1') {  // 뒷자리 첫번째 배열 내 첫글자가 1로 시작하면
    let gender = document.getElementById("male");
    gender.checked = true;
  } else if (pattValue[0].charAt(0) == '2') { // 뒷자리 첫번째 배열 내 첫글자가 2로 시작하면
    let gender2 = document.getElementById("female")
    gender2.checked = true;
  }

  if (regiArr.length > 0) {
    alert(regiArr.join("\n"));
    return false;
  } else {
    alert("확인 완료")
    return true;
  }
}

function addDataToTable() {
  const id = document.getElementById('id').value; 
  const name = document.getElementById('name').value;

  const gender = document.querySelector('input[name="gender"]:checked');
  const interests = document.querySelectorAll('input[name="interest"]:checked');

  let arr = [];
  interests.forEach(function(interest){
    arr.push(interest.value);
  });

  const interestList = arr.join(', ');

  const tableBody = document.getElementById('info-table').querySelector('tbody');

  let newRow = `
  <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${gender ? gender.value : ''}</td>
    <td>${interestList}</td>
  </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newRow);

  document.getElementById('signup-form').reset();

}