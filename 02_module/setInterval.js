//setInterval.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// count: 100 -> 0 1씩 감소.
let count = 20;
setInterval(() => {
  count--;
  if (count < 0) {
    if (wordAry.length == 0) {
      console.log("성공");
    } else {
      console.log("실패");
    }
    process.exit();
  }
  //console.log(`현재 count: ${count}`);
}, 1000);

let wordAry = "Lorem ipsum dolor sit, amet consectetur adipisicing elit." //Culpa similique non beatae placeat illo sapiente, suscipit, magni autem recusandae cum et eveniet odio omnis itaque voluptatibus praesentium ut. Voluptates, quasi." //.split(
  .split(" ");

function myFunction() {
  //100이 완료되기전에 배열에 있는 값을 clear하면 성공.
  //100이 완료된 후 배열에 값이 있으면 실패.
  if (count < 0) {
    if (wordAry.length == 0) {
      console.log("성공");
    } else {
      console.log("실패");
    }
    rl.close(); //stream은 사용후 close();
  }

  rl.question("단어를 입력하세요.", (answer) => {
    let search = answer;
    let idx = wordAry.indexOf(search);
    wordAry.splice(idx, 1); //삭제.
    wordAry.forEach((word) => {
      console.log(word);
    });
    myFunction();
  });
  //if (wordAry.length == 0) {
  //break;
  ///}
  //}
}
myFunction();
