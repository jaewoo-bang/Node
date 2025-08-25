// fs_read.js
const fs = require("fs");
// 비동기(non블로킹)/동기(블로킹)
fs.readFile("./stdout.log", "utf8", (err, buf) => {
  //3 (실행순서)
  //callback 함수(비동기처리)
  if (err) {
    console.error("예외발생");
    return;
  }
  console.log(buf);
});

let errBuf = fs.readFileSync("./stderr.log", "utf8"); //1(동기처리)
console.log(errBuf);

console.log("다른코드"); //2
