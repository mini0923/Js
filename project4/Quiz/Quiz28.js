// Quiz 27
// 다음과 같이 주사위 게임을 만들어주세요
// 1) 각 플레이어가 주사위를 3번씩 던집니다
// 2) 주사위 결과의 합을 계산합니다.
// 3) 두 플레이어의 합을 비교하여 승자를 결정합니다.

// 매개변수 : count(반복횟수)
// 리턴값 : dice (배열), sum (배열 내 숫자 합계)

function diceResult(count){

  let diceArr = [];
  let sum = 0;

  for (let i = 0; i < count; i++){
    let result = Math.floor(Math.random() * 6)+1;
    diceArr.push(result);
    sum += result;
  }  
  return {diceArr , sum};
}


const player1 = diceResult(3);
console.log(`Player 1의 주사위 결과: [${player1.diceArr}] 합 : ${player1.sum}`);

const player2 = diceResult(3);
console.log(`Player 2의 주사위 결과: [${player2.diceArr}] 합 : ${player2.sum}`);


if (player1.sum > player2.sum){
  console.log("Player 1 승리!");
} else if (player1.sum < player2.sum){
  console.log("Player 2 승리!");
} else if (player1.sum == player2.sum){
  console.log("비겼습니다.");
} else {
  console.log("오류");
}
