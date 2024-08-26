// Quiz 10

const products = [
  { name: "스마트폰", price: 799000, category: "전자제품" },
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "헤드폰", price: 150000, category: "전자제품" },
  { name: "키보드", price: 100000, category: "액세서리" },
  { name: "마우스", price: 50000, category: "액세서리" },
  { name: "충전기", price: 30000, category: "액세서리" },
  { name: "블루투스 스피커", price: 90000, category: "전자제품" },
];

// 가격순으로 작은것 부터 정렬
products.sort(

  function (a, b) {
    return a.price - b.price;
  }

);
console.log("정렬된 상품 목록: ");
console.log(products);


// category가 전자제품인것으로 필터링 해줌
let filtered = products.filter(el => el.category == "전자제품");
// 기존 필터링(category가 전자제품)에서 가격이 50000만원 이상 500000만원 이하를 필터링 해줌
let filtered2 = filtered.filter(el => el.price >= 50000 && el.price <= 500000);


console.log("필터링된 상품 목록: ");
console.log(filtered2);


// '￦' 포맷팅 되게 하려면 map함수를 통해 새로운 배열 생성해줌.
let formated = filtered2.map(

  function (formated) {
    return {
      name : formated.name,
      formattedPrice : '￦' + formated.price,
      category : formated.category,
    };
  }
);

console.log("포맷된 상품 목록: ");
console.log(formated);
