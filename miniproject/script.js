// 총 할일 (전역변수)
let total = 0;

// 완료한 일 (전역변수)
let checked = 0;

// 로컬스토리지 출력 함수
function loadFromLocalStorage() {
  let savedList = localStorage.getItem("saved-List");

  if (savedList) {
    let savedListArray = JSON.parse(savedList);
    let ul = document.getElementById("toDoList");

    // 저장된 리스트를 화면에 추가
    savedListArray.forEach(item => {
      ul.insertAdjacentHTML("beforeend",
        `<div id="insert">
        <input type="checkbox" class="insertCheck" name="check" ${item.savedChecked ? "checked" : ""} onclick="doCheck()">
        <input type="text" value="${item.savedText}" class="insertText" readonly> 
        <button onclick="doModify(this)" class="modifyBtn">수정</button>
        <button onclick="doRemove(this)" class="removeBtn">삭제</button>
        </div>
        `);
    });

    // 총 할일 수와 완료된 할일 수를 업데이트
    total = savedListArray.length;
    checked = savedListArray.filter(item => item.savedChecked).length;
    doCount();
  }
}

// 페이지 로드 시 로컬스토리지에서 데이터 불러오기
window.onload = loadFromLocalStorage;


function doAdd() {

  // 할일 추가
  let list = document.getElementById("inputText").value;
  let ul = document.getElementById("toDoList");

  if (list.trim() == "") {
    alert("할일을 적어주세요");
  } else {
    // 요소 추가
    ul.insertAdjacentHTML("beforeend",
      `<div id="insert">
      <input type="checkbox" class="insertCheck" name="check" onclick="doCheck()">
      <input type="text" value = "${list}" class="insertText" readonly> 
      <button onclick="doModify(this)" class="modifyBtn">수정</button>
      <button onclick="doRemove(this)" class="removeBtn">삭제</button>
      </div>
      `);

    total++; // 총 개수 증가
    doCount();
    savedLocalStorage();
  }

  document.getElementById("inputText").value = ""; // 입력 필드 초기화
}

// 완료한 일 체크 함수
function doCheck() {
  let checkbox = document.getElementsByClassName("insertCheck");

  // 현재 체크된 박스 수 저장 변수
  let currentCheck = 0;

  // 추가 요소 반복문
  for (let i = 0; i < checkbox.length; i++) {
    // 만약 추가 요소 중 체크가 되어있다면, currentCheck 증가
    if (checkbox[i].checked) {
      currentCheck++;
    }
  }

  // 취소선 함수 호출
  doCancel();

  // checked 에 currentCheck 값 대입
  checked = currentCheck;

  // doCount 함수 내 checked 값 전달
  doCount(checked);
}

// 체크 박스 체크 시 취소선
function doCancel() {

  let checkbox = document.getElementsByClassName("insertCheck");
  let text = document.getElementsByClassName("insertText");
  let moButton = document.getElementsByClassName("modifyBtn");
  let rmButton = document.getElementsByClassName("removeBtn");

  // 추가 요소 반복문
  for (let i = 0; i < checkbox.length; i++) {
    // 각각의 checkbox에 해당하는 텍스트, 버튼을 가져온다.
    textLine = text[i];
    moBtn = moButton[i];
    rmBtn = rmButton[i];

    // 만약 추가 요소 중 체크가 되어있다면, 취소선 생성
    if (checkbox[i].checked) {
      textLine.style.textDecoration = "line-through";
      moBtn.style.textDecoration = "line-through";
      rmBtn.style.textDecoration = "line-through";
      savedLocalStorage();
    } else {
      textLine.style.textDecoration = "";
      moBtn.style.textDecoration = "";
      rmBtn.style.textDecoration = "";
      savedLocalStorage();

    }
  }
}


// 개수 카운트
function doCount() {
  document.getElementById("total").textContent = total;
  document.getElementById("end").textContent = checked;
}

// 선택 수정
function doModify(button) {
  // 해당 클릭된 버튼의 부모, div 내 첫번째 요소를 선택하는 코드(parentElement)
  let list = button.parentElement.querySelector(".insertText");

  if (button.textContent === "수정") {
    button.textContent = "저장";
    list.removeAttribute('readonly', '');
    savedLocalStorage();    
  } else if (button.textContent === "저장") {
    if (list.value.trim() == "") {
      alert("글자는 써주세요");
    }else {
      button.textContent = "수정";
      list.setAttribute('readonly','readonly');
      savedLocalStorage();
    }
  }
}

// 선택 삭제
function doRemove(button) {
  let rm = button.parentElement;
  let checkbox = rm.querySelector(".insertCheck");

  // 체크박스에 체크가 안되어있는 경우
  if (!checkbox.checked) {
    alert("체크 후 삭제해주세요.");
  } else {
    // 체크박스에 체크가 되어있다면, 해당 부분 삭제
    rm.remove();
    total--; // 전체 
    checked--;
    doCount();
    savedLocalStorage(); // 삭제 후 로컬스토리지 저장

  }
}

// 전체 삭제
function doDeleteAll() {

  let inputs = document.querySelectorAll("#insert");

  if (inputs == null) {
    alert("지울게 없습니다.")
  } else {
    inputs.forEach(input => input.remove());
    total = 0;
    checked = 0;
    doCount();
    localStorage.removeItem('saved-List');  // 로컬스토리지 내 데이터 삭제  
  }
}

// localStorage 저장함수
function savedLocalStorage() {
  let saveArr = [];
  let savedChecked = document.getElementsByClassName("insertCheck");
  let savedText = document.getElementsByClassName("insertText");

  for (let i = 0; i < savedChecked.length; i++ ){
    saveArr.push({
      savedChecked: savedChecked[i].checked,
      savedText: savedText[i].value
    });
  }
  savedList = saveArr;
  localStorage.setItem("saved-List", JSON.stringify(savedList));

}
