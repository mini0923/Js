// Quiz 23

let phone = {
  brand : "Apple",
  price : 990000,
  model : "iPhone 13",
};

let {brand , price} = phone;

console.log("브랜드 : " + brand);

let { } = phone;

console.log("가격 : " + price);

// Quiz 24

let movie = {
  title : "인셉션",
  direcotr : "크리스토퍼 놀란",
  year : 2010,
};

let {title : movieTitle} = movie;

console.log("제목 : " + movieTitle);

let {year : releaseYear} = movie;

console.log("출시연도 : " + releaseYear);


// Quiz 25

let car = {
  brand : "Tesla",
  model : "Model S",
  color : "Red",
};

let {brand : carBr, model : carMo} = car;

console.log(`자동차 브랜드 : ${carBr}, 모델명 : ${carMo}`);