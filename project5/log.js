// 모듈 : 변수나 함수를 다른 파일에서 사용할 수 있게 하는 방법

export function log(message) {
  console.log(`MSG: ${message}`);
}


export function error(message) {
  console.error(`ERROR: ${message}`);
}