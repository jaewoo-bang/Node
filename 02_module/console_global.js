console.log("hello world"); //일반적인 로그
console.log("hello %s", "world"); //일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로전달

const world = "world";
console.log(`hello ${world}`); //자스 템플릿 리터럴 문법을 사용

console.error(new Error("에러 메시지 출력"));

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr);

const obj = {
  students: {
    grade1: {
      classA: {
        student1: { name: "Alice", age: 7 },
        student2: { name: "Bob", age: 6 },
      },
      classB: {
        student1: { name: "Charlie", age: 7 },
        student2: { name: "Diana", age: 6 },
      },
    },
    grade2: {
      classA: {
        student1: { name: "Eve", age: 8 },
        student2: { name: "Frank", age: 8 },
      },
      classB: {
        student1: { name: "Grace", age: 9 },
        student2: { name: "Hank", age: 8 },
      },
    },
  },
  teachers: {
    grade1: {
      classA: { name: "Mr. Kim", subject: "Math" },
      classB: { name: "Ms. Lee", subject: "Korean" },
    },
    grade2: {
      classA: { name: "Mr. Park", subject: "Science" },
      classB: { name: "Ms. Choi", subject: "English" },
    },
  },
};

console.log(obj, { depth: 3, colors: true });
