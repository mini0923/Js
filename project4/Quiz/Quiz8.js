// Quiz 8
let str = "hello world welcome to programming";

// 문자열을 배열로 변경
let newStr = str.split(" ");

// 배열로 바꾸었기에 toUpperCase사용하려면 map함수 사용
let result = newStr.map(

  function (newStr){
    // index 0번째만 대문자 + 기존 배열 내 index 1번 잘라내기
    return newStr.charAt(0).toUpperCase() + newStr.slice(1) ;
  }

);

// toString을 사용해 문자열로 변환 후 배열에서 생긴 ","를 띄어쓰기로 변경함
console.log("새로운 문자열 : " + result.toString().replaceAll(",", " "));



