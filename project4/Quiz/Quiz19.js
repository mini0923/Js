// Quiz 19

// 19-1
let contact = new Map();

contact.set("민수", { phone: "010-1234-5678", address: "서울특별시 강남구" });
contact.set("지영", { phone: "010-8765-4321", address: "부산광역시 해운대구"});
contact.set("현우", { phone: "010-2345-6789", address: "대구광역시 수성구" });
contact.set("수빈", { phone: "010-9876-5432", address: "인천광역시 남동구" });
contact.set("동민", { phone: "010-3456-7890", address: "광주광역시 서구" });
contact.set("하은", { phone: "010-6543-2109", address: "대전광역시 유성구" });
  

console.log("연락처 목록:");
for (let [name, info] of contact) {
  console.log(`${name}: ${info.phone}, ${info.address}`);
}
console.log();

// 19-2
if(contact.has("동민")){
  contact.set("동민", { phone: "010-9999-9999", address: "광주광역시 서구" });
}

console.log("동민의 연락처를 수정했습니다.");

if(contact.has("지영")){
  contact.delete("지영");
}

console.log();

console.log("지영의 연락처를 삭제했습니다.");

console.log();

console.log("현재 연락처 목록:");
for (let [name, info] of contact) {
  console.log(`${name}: ${info.phone}, ${info.address}`);
}
console.log();

console.log(`현재 연락처 개수 : ${contact.size}`);