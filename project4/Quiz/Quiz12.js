// Quiz 12


// 배열의 요소 값을 변경할 때는 map() 또는 forEach()를 사용
// map()은 새로운 배열을 반환하고,
// forEach()는 기존 배열을 수정하므로 간단한 변경은 forEach()를 사용할 것

const inventory = [
  { product: "감자칩", quantity: 10, price: 1500 },
  { product: "아이스크림", quantity: 0, price: 3000 },
  { product: "쿠키", quantity: 20, price: 2000 },
  { product: "탄산음료", quantity: 5, price: 1000 },
];

// 새로운 객체 생성
const addInven = { product: "바나나킥", quantity: 50, price: 1000 };

// 새로운 객체 배열내 추가
inventory.push(addInven);

console.log("새로운 제품 추가: ");
console.log(inventory);

// 재고있는 제품에 대해 앞에 재고있음을 추가하려면 map함수를 통해 새로운 배열 작성
let stock = inventory.map(

  function (stock) {
    // (재고있음)을 넣을 변수 생성
    let haveStock = "";
    // 재고가 0 이상이라면 haveStock에 (재고있음)을 넣겠다라는 조건식작성
    if (stock.quantity > 0) {
      haveStock = "(재고있음) ";
    }

    return {
      // haveStock + stock.product => 재고가 있다면 : "(재고있음)"+ "재고~~~" , 재고가 없다면 ""+"재고~~~"
      product: haveStock + stock.product,
      quantity: stock.quantity,
      price: stock.price,
    };

  }

);

console.log("재고가 있는 제품의 이름 변경: ");
console.log(stock);

// inventory.forEach(
//   function (stock){
//     if(stock.quantity > 0){
//       stock.product = `(재고있음) ${stock.product}`;
//     }
//   }
// );

// console.log(inventory);


// 재고가 10개 보다 많다면, 10프로 할인해야하는데 해당 부분을 수정하려면 map 함수를 통해 새로운 배열 생성해야함
let sale = stock.map(

  function (sales) {
    // 10프로 가격 저장할 변수 생성
    let salePrice = 0;
    // 재고가 10보다 많다면
    if (sales.quantity > 10) {
      // 기존 가격의 10을 나눈 값을 salePrice에 저장
      salePrice = sales.price / 10;
    }

    return {
      product: sales.product,
      quantity: sales.quantity,
      // sales.price - salePrice => 재고가 10보다 많으면 기존 가격 - 10프로 할인금액 , 재고가 없다면? 기존가격 - 0;
      price: sales.price - salePrice,
    };

  }

);

// inventory.forEach(

//   function (sales){
//     if(sales.quantity > 10){
//       sales.price = sales.price * 0.9;
//     }
//   }

// );



console.log("재고가 10개가 넘는 제품의 가격 할인: ");
console.log(sale);

// console.log(inventory);


// 전체 재고의 가격 구하려면 reduce 함수를 사용해야한다.
let totalPrice = sale.reduce(

  function (total, currentValue) {
    // total : 누적값
    // currentValue.price : 가격
    // currentValue.quantity : 재고
    // total = 가격 * 재고
    return total + (currentValue.price * currentValue.quantity);
  }

  , 0);

console.log("전체 재고의 총 가치: " + totalPrice);