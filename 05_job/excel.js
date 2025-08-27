// excel.js
const xlsx = require("xlsx");
const sql = require("./sql");

//db 조회 후 => 엑셀파일.
async function db_to_excel() {
  const workbook = xlsx.utils.book_new(); //workbook 생성.
  let resultSet = await sql.execute("select * from customers");
  console.log(resultSet);
  // 배열 => sheet : json_to_sheet. 구조: workbook > sheet > cell
  const firstSheet = xlsx.utils.json_to_sheet(resultSet, {
    header: ["id", "name", "email", "phone", "address"],
  });

  xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers"); // 시트생성.
  xlsx.writeFile(workbook, "./logs/customers.xlsx"); //엑셀파일생성.
  // 시트 -> workbook -> customers.xlsx
}
db_to_excel();

function excel_to_db() {
  const workbook = xlsx.readFile("./logs/write2.xlsx");
  //console.log(workbook.SheetNames[0]);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];

  let jsonSheet = xlsx.utils.sheet_to_json(firstSheet);
  console.log(jsonSheet);
  jsonSheet.forEach(async (customer) => {
    let result = await sql.execute("insert into customers set ?", customer);
    console.log(result);
  });
}
console.log("파일 저장 완료");

// console.log(firstSheet["A2"].v);
// firstSheet["B2"] = "Hongkildong";

// firstSheet["A3"] = { v: "99", t: "n" };
// firstSheet["B3"] = { v: "김아린", t: "s" };
// firstSheet["C3"] = { v: "kima@email.com", t: "s" };
// firstSheet["D3"] = { v: "010-3333-1313", t: "s" };
// firstSheet["E3"] = { v: "예담직업전문학교", t: "s" };

// firstSheet["!ref"] = "A1:E3";
// xlsx.writeFile(workbook, "./logs/write3.xlsx");
