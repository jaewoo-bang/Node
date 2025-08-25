let name = "방재우";
let score = 80;

console.log("이름은 " + name + ", 점수는 " + score);
console.log(
  `이름은 ${name}, 점수는 ${score} 합격여부 ${score > 60 ? "합격" : "불합격"}`
);

[1, 2, 3].forEach((element) => {
  console.log(element);
});

function sum(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}

const NumberFormat = "2025.08.08";
//NumberFormat = "2025.08.08"; 상수변수는 재할당이 불가.
for (let i = 1; i <= 5; i++) {
  if (i % 2) {
    // falsy : 0, null, "", undefined
    let name = "KIM"; // {} 유효한 값을 유지.
    console.log(name);
  } else {
    console.log(name);
  }
}
if (score) {
  let name = "홍길동";
  console.log(name);
}
