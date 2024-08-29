function doAdd() {
  let name = document.getElementById("name").value;
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;

  let ul = document.getElementById("myUl");
  ul.insertAdjacentHTML("beforeend", `<li>${name} - ${quantity}개 ${quantity * price}원</li>`);

  let totalQuantity = document.getElementById("totalQuantity").value;
  let totalPrice = document.getElementById("totalPrice").value;

  totalQuantity += quantity;
  totalPrice += quantity * price;

  totalQuantity = document.getElementById("totalQuantity").innerText= `총 수량 : ${totalQuantity}`;
  totalPrice = document.getElementById("totalPrice").innerText = `총 수량 : ${totalPrice}`;


}




// textCount = document.getElementById("count").innerText = `${textCount}/30 글자`;
