//fs_write.js
const fs = require("fs");
// fs.readFile / fs.readFileSync 활용해서 stdout.log 정보를 읽어들이고..

fs.readFile("./stderr.log", "utf8", (err, buf) => {
  if (err) {
    console.error("예외발생");
    return;
  }
  console.log(buf);
});

// let errBuf = fs.readFileSync("./stdout.log", "utf8");
// console.log(errBuf);

fs.writeFile(
  "./file_log.txt", //생성할파일 저장위치
  buf, //파일에 쓰여질 내용 변수에 담긴값을 넘겨줌
  { encoding: "utf8", flag: "a" }, //옵션.
  (err) => {
    // 콜백함수.
    //동기처리
    if (err) {
      console.error("예의발생");
      return;
    }
    console.log("파일생성완료!");
  }
);
