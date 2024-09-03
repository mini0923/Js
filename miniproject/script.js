let count = 0;

function doAdd() {

  // 할일 추가
  let list = document.getElementById("inputText").value;
  let ul = document.getElementById("toDoList");
  
  if (list.trim() == ""){
    alert("할일을 적어주세요");
  } else {
    ul.insertAdjacentHTML("beforeend", 
      `<div class="insert">
      <input type="checkbox" class="insertCheck" name="check">
      <input type="text" value = "${list}" class="insertText" readonly> 
      <button onclick="doModify(this)" class="insertBox">수정</button>
      <button onclick="doRemove(this)" class="insertBox">삭제</button>
      </div>
      `);
      
      count++;
      doCount();
    }
    document.getElementById("inputText").value = ""; // 입력 필드 초기화
}

// 개수 카운트
function doCount() {
  let checked = document.querySelectorAll('input[name="check"]:checked').length;
  console.log(checked);
  document.getElementById("total").textContent = count;
  document.getElementById("end").textContent = checked;
}


// 선택 수정
function doModify() {
  let list = document.getElementById("inputText").value;
  
  if (list == ""){
    alert("수정을 제대로 해주세요");
  } else {
    
  }

}

// 선택 삭제
function doRemove() {
  
}

// 전체 삭제
function doDeleteAll() {
  
}


// let interests = document.querySelectorAll('input[name="interest"]:checked');