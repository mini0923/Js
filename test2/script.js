function validate(f) {

  // 아이디 정규식
  let idPatt = /^[0-9a-z]{4,8}$/;

  // 주민등록번호 앞자리 정규식
  let sn1Patt = /^[0-9]{6,6}$/;

  // 주민등록번호 뒷자리 정규식
  let sn2Patt = /^[0-9]{7,7}$/;


  if (!idPatt.exec(f.id.value)) {
    alert("아이디는 4~8자의 소문자 또는 숫자로만 입력해주세요.");
    return false;
  }

  if (f.pw.value != f.checkpw.value) {
    alert("패스워드 확인해주세요.");
    return false;
  }

  if (!sn1Patt.exec(f.sn1.value)) {
    alert("주민등록번호 앞자리 확인해주세요.");
    return false;
  } else if (!sn2Patt.exec(f.sn2.value)) {
    alert("주민등록번호 뒷자리 확인해주세요.")
    return false;
  }

  // 관심분야 카운트 변수
  let int_cnt = 0;

  for (let i = 0; i < f.interest.length; i++) {
    if (f.interest[i].checked) {
      int_cnt++;
    }
  }

  if (int_cnt == 0) {
    alert("관심분야는 한가지 이상 선택해야합니다.");
    return false;
  }

  addDataToTable();
  return true;
}

function checkGender() {
  let sn2 = document.getElementById("sn2").value;
  let maleRadio = document.getElementById("male");
  let femaleRadio = document.getElementById("female");

  if (sn2.length > 0) {
    const gender = sn2.charAt(0);
    if (gender == 1 || gender == 3) {
      maleRadio.checked = true;
    } else if (gender == 2 || gender == 4) {
      femaleRadio.checked = true;
    } else {
      maleRadio.checked = false;
      femaleRadio.checked = false;
      alert("주민등록번호 뒷자리를 제대로 입력해주세요.");
      document.getElementById("sn2").value = "";
      return false;
    }
  } else {
    alert("주민등록번호 뒷자리를 제대로 입력해주세요.");
    document.getElementById("sn2").value = "";
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

  const tableBody = document.getElementById("info-table").querySelector('tbody');

  const interestList = arr.join(', ');

  let newRow = `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${gender ? gender.value : ''}</td>
      <td>${interestList}</td>
    </tr>
  `

  tableBody.insertAdjacentHTML("beforeend", newRow);

  document.getElementById("signup-form").reset();

}

function search() {
  const idValue = document.getElementById("searchId").value.toLowerCase().trim();
  const nameValue = document.getElementById("searchName").value.toLowerCase().trim();

  const table = document.getElementById("info-table");
  const rows = table.querySelectorAll("tbody tr");

  if (idValue) {
    rows.forEach(row => {
      // 첫번째 셀을 선택 (ID의 값이 저장되어있음)
      const idCell = row.querySelectorAll("td")[0];

      // 셀의 텍스트를 소문자로 변환 후, 공백 제거
      const idText = idCell.textContent.toLowerCase().trim();

      // 셀의 텍스트 내 검색한 데이터가 포함되어있는지 확인
      const showRow = idText.includes(idValue);

      // showRow값이 true라면 데이터를 표시, false라면 표시하지 않는다.
      row.style.display = showRow ? "" : "none";
    });
  } else if (nameValue){
    rows.forEach(row => {
      const nameCell = row.querySelectorAll("td")[1];

      const nameText = nameCell.textContent.toLowerCase().trim();

      const showRow = nameText.includes(nameValue);

      row.style.display = showRow ? "" : "none";
    });
  }
}

function reset() {
  const searchValue = document.getElementById("searchId").value;
  const nameValue = document.getElementById("searchName").value;

  if(searchValue){
    document.getElementById("searchId").value = "";
  } else if (nameValue){
    document.getElementById("searchName").value = "";
  }

  const table = document.getElementById("info-table");
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach(row => {
    row.style.display = "";

  });
}