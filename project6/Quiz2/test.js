function doAdd() {
  let name = document.getElementById("name").value;
  let quantity = parseFloat(document.getElementById("quantity").value);
  let price = parseFloat(document.getElementById("price").value);

  // ul태그 내 신규 li 추가 
  let ul = document.getElementById("myUl");
  ul.insertAdjacentHTML("beforeend", `<li>${name} - ${quantity}개 ${quantity * price}원</li><button onclick="doRemove(this)">제거</button>`);

  // 수량, 가격에서 전달 받은 값 type 변경 후 추출하는 방법
  let totalQuanEl = document.getElementById("totalQuantity");
  let totalQuantity = parseFloat(totalQuanEl.innerText.replace('총 수량 : ', '')) || 0;

  let totalPrEl = document.getElementById("totalPrice");
  let totalPrice = parseFloat(totalPrEl.innerText.replace('총 가격 : ', '')) || 0;

  // 총 수량, 총 가격 더하기
  totalQuantity += quantity;
  totalPrice += quantity * price;

  // 총 수량, 총 가격 출력
  totalQuanEl.innerText = `${totalQuantity}`;
  totalPrEl.innerText = `${totalPrice}`;

  let addArr = [];

  if (name == "") {
    addArr.push("상품이름을 입력해주세요");
  }
  if (isNaN(quantity)) {
    addArr.push("유효한 수량을 입력해주세요");
  }
  if (isNaN(price)) {
    addArr.push("유효한 가격을 입력해주세요");
  }

  if (addArr.length > 0) {
    alert(addArr.join("\n"));
    return false;
  } else {
    return true;
  }
}

// 장바구니 내 품목 삭제 버튼 함수
function doRemove(button) {
  let ul = button.parentElement;
  ul.remove();
  updateTotal();

}