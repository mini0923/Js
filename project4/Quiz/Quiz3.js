let file = "사과.txt";
if(file.endsWith(".jpg")||file.endsWith(".png")||file.endsWith(".gif")){
  console.log("사진 파일이 맞습니다!");
} else {
  console.log("지원되지 않는 파일 형식입니다.");
}


// 지원되는 확장자 목록
const allowedExtensions = [".jpg",".png",".gif"];
const filename = "사과.txt";

// 파일의 확장자 추출
const index = filename.lastIndexOf(".");  // 2
const extension = filename.slice(index);  // .txt(2번부터 끝까지)

// 확장자가 지원되지 않는 경우 메세지 출력
if (!allowedExtensions.includes(extension)){
  console.log("지원되지 않는 파일 형식입니다.");
} else {
  console.log("지원되는 파일 형식입니다."); 
}