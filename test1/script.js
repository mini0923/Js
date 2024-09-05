function validate(f) {
  // ID 정규식
  let idPatt = /^[0-9a-z]{4,8}$/;

  // 주민등록번호 앞자리 정규식
  let sn1Patt = /^[0-9]{6,6}$/;

  // 주민등록번호 뒷자리 정규식
  let sn2Patt = /^[0-9]{7,7}$/;

  // 아이디 검증
  if (!idPatt.exec(f.id.value)) {
    alert("아이디는 4~8자의 소문자 또는 숫자로 입력되어야 합니다.");
    return false;
  }

  // 패스워드 검증
  if (f.pw.value != f.checkpw.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }

  // 주민등록번호 검증
  if (!sn1Patt.exec(f.sn1.value)) {
    alert("주민등록번호 앞자리를 똑바로 입력해주세요.");
    return false;
  } else if (!sn2Patt.exec(f.sn2.value)) {
    alert("주민등록번호 뒷자리를 똑바로 입력해주세요.");
    return false;
  }

  // 관심분야 체크
  let int_cnt = 0;

  for (let i = 0; i < f.interest.length; i++) {
    if (f.interest[i].checked) {
      int_cnt++;
    }
  }

  if (int_cnt == 0) {
    alert("관심분야를 최소 한개 선택하세요");
    return false;
  }

  addDataToTable();
  return true;
}


// 주민등록번호 뒷자리 확인 후 성별 체크 함수
function checkGender() {
  let sn1 = document.getElementById("sn1").value;
  let sn2 = document.getElementById("sn2").value;
  const maleRadio = document.getElementById("male");
  const femaleRadio = document.getElementById("female");

  if (sn2.length > 0) {
    const gender = sn2.charAt(0);
    if (gender == 1 || gender == 3) {
      maleRadio.checked = true;
    } else if (gender == 2 || gender == 4) {
      femaleRadio.checked = true;
    } else {
      maleRadio.checked = false;
      femaleRadio.checked = false;
      alert("주민등록번호 뒷자리 확인해주세요.");
      document.getElementById("sn2").value = ""; // 입력 필드 초기화
      return false;
    }
  } else {
    alert("주민등록번호 뒷자리 확인해주세요.");
    document.getElementById("sn2").value = ""; // 입력 필드 초기화
    return false;
  }
}

function addDataToTable() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;

  const gender = document.querySelector('input[name="gender"]:checked');
  const interest = document.querySelectorAll('input[name="interest"]:checked');

  let arr = [];
  interest.forEach(function (interest) {
    arr.push(interest.value);
  });

  const interestList = arr.join(', ');

  const tableBody = document.getElementById("info-table").querySelector('tbody');

  let newRow = `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${gender ? gender.value : ''}</td>
      <td>${interestList}</td>
    </tr>
    `;

  tableBody.insertAdjacentHTML("beforeend", newRow);

  document.getElementById("signup-form").reset();

}


function search() {
  // 검색 ID 값 소문자로 변환 후, 공백제거
  const idValue = document.getElementById("searchId").value.toLowerCase().trim();

  // 검색 이름 값 소문자로 변환 후, 공백제거
  const nameValue = document.getElementById("searchName").value.toLowerCase().trim();

  const selectGender = document.querySelector('input[name="gender"]:checked');

  const genderValue = selectGender ? selectGender.value : null;

  const selectInter = document.querySelectorAll('input[name="interest"]:checked');

  const interValue = selectInter ? selectInter.value : null;

  // 테이블의 모든 행을 가져옴
  const table = document.getElementById("info-table");
  const rows = table.querySelectorAll("tbody tr");

  // 아이디 검색창에 값이 있다면 실행

  rows.forEach(row => {
    // 각 필터 조건이 적용되지 않은 기본 상태로 설정
    let showRow = true;

    // 아이디 필터 적용
    if (idValue) {
      const idCell = row.querySelectorAll("td")[0];
      const idText = idCell.textContent.toLowerCase().trim();
      showRow = idText.includes(idValue);
    }

    // 이름 필터 적용
    if (nameValue) {
      const nameCell = row.querySelectorAll("td")[1];
      const nameText = nameCell.textContent.toLowerCase().trim();
      showRow = showRow && nameText.includes(nameValue);
    }

    // 성별 필터 적용
    if (genderValue) {
      const genderCell = row.querySelectorAll("td")[2];
      const genderText = genderCell.textContent.toLowerCase().trim();
      showRow = showRow && (genderText.includes(genderValue.toLowerCase()));
    }

    if (interValue){
      const interCell = row.querySelectorAll("td")[3];
      const interText = interCell.textContent.toLowerCase().trim();
      showRow = showRow && (interText.includes(interValue.toLowerCase()));
    }

    // 필터 조건에 맞는지에 따라 행을 표시하거나 숨김
    row.style.display = showRow ? "" : "none";
  });


//   if (idValue) {
//     rows.forEach(row => {
//       // 첫번째 셀을 선택 (ID의 값이 저장되어있음)
//       const idCell = row.querySelectorAll("td")[0];

//       // 셀의 텍스트를 소문자로 변환 후, 공백 제거
//       const idText = idCell.textContent.toLowerCase().trim();

//       // 셀의 텍스트 내 검색한 데이터가 포함되어있는지 확인
//       const showRow = idText.includes(idValue);

//       // showRow값이 true라면 데이터를 표시, false라면 표시하지 않는다.
//       row.style.display = showRow ? "" : "none";
//     });
//   } else if (nameValue) {  // 이름 검색창에 값이 있다면 실행
//     rows.forEach(row => {
//       // 두번째 셀을 선택(이름 값이 저장되어있음)
//       const nameCell = row.querySelectorAll("td")[1];

//       const nameText = nameCell.textContent.toLowerCase().trim();

//       const showRow = nameText.includes(nameValue);

//       row.style.display = showRow ? "" : "none";
//     });
//   } else if (genderValue) {
//     rows.forEach(row => {
//       const genderCell = row.querySelectorAll("td")[2];

//       const genderText = genderCell.textContent.toLowerCase().trim();

//       const showMale = genderText.includes("M");

//       const showFemale = genderText.includes("F");

//       if (genderValue == "M"){
//         row.style.display = showMale ? "" : "none";
//       } else if (genderValue == "F"){
//         row.style.display = showFemale ? "" : "none";
//       }
    
//     });
// }

}


function reset() {
  const searchValue = document.getElementById("searchId").value;
  const nameValue = document.getElementById("searchName").value;
  const genderRadio = document.getElementsByName("gender");


  // ID 검색창의 값이 있다면
  if (searchValue) {
    // 검색창의 값을 지워줌.
    document.getElementById("searchId").value = "";
  } else if (nameValue) { // 이름 검색창의 값이 있다면
    document.getElementById("searchName").value = "";
  } else if (genderRadio){
    genderRadio.forEach(radio => {
      radio.checked = false;
    });
  } 

    const interestbox = document.querySelectorAll('input[name="interest"]');
    if (interestbox){
      interestbox.forEach(checkbox => {
        checkbox.checked = false;
      });    
    }
  

  const table = document.getElementById("info-table");
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach(row => {
    row.style.display = "";

  });
}