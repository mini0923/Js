// Quiz7

// 7-1
// 5 * 3 크기의 사각형을 별(*)로 출력하세요
// 너비가 5이고 높이가 3입니다.

for (let i = 1; i <= 3; i++){  
  let row = "";
  for (let j = 1; j <= 5; j++){
    row += "*"
  }
  console.log(row);
}



// 7-2
// 5 * 5 크기의 삼각형을 별(*)로 출력하세요
for (let i = 1; i <= 5; i++){
  let row = "";
  for (let j = 1; j <= i; j++){
    row += "*";
  }
  console.log(row);
}
