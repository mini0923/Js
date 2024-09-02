// 숫자가 아닌값 입력되면, 색상 변하는 함수
function contacts() {
  let text = document.getElementById("contact");
  let textValue = text.value;
  let patt = /[0-9]/g;

  if (patt.test(textValue)) {
    text.className = "";
  } else {
    text.className = "border-red";
  }
}

// 지원동기 글자 입력 시 글자수 실시간 표시
// 최대 글자 수 (30글자) 초과한 경우 글자색 빨간색 변경
function textCounting() {
  let text = document.getElementById("textarea")
  let textValue = text.value;

  let textCount = textValue.length;


  // 최대 글자 수 (30글자) 초과한 경우 글자색 빨간색 변경
  if (textCount > 30) {
    text.className = "text-red";
  } else {
    text.className = "";
  }

  // 지원동기 글자 입력 시 글자수 실시간 표시 
  textCount = document.getElementById("count").innerText = `${textCount}/30 글자`;
}

function doSave() {
  let name = document.getElementById("name");
  let contact = document.getElementById("contact");
  let support = document.getElementsByName("support");

  let saveArr = [];
  let supCheck = false;

  for (let i = 0; i < support.length; i++) {
    if (support[i].checked == true) {
      supCheck = true;
      break;
    } 
  }

  // alert 창은 마지막에 한번만!!!!!!!!!!
  if (name.value == "") {
    saveArr.push("이름을 입력해주세요");
  } 
  if (contact.value == "") {
    saveArr.push("연락처를 입력해주세요");
  } 
  if (supCheck  == false){
    saveArr.push("지원 분야를 선택해주세요");
  } 
  
  if (saveArr.length > 0){
    alert(saveArr.join("\n"));
    return false;
  } else {
    alert("제출완료")
    return true;
  }

}




// function doSave() {
//   let text = document.getElementById("text1");
//   if(text.value == ""){
//     text.className = "border-red";
//     alert("필수값들을 입력하세요.");
//   }
// }