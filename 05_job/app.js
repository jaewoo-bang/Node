const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const sql = require("./sql");
const xlsx = require("xlsx");
const nodemail = require("./nodemail");
//const process = require("process");

console.log(process.env);

const app = express();
app.use(express.urlencoded());

//라우팅
app.get("/", (req, resp) => {
  resp.send("/");
});
app.get("/mail", (req, resp) => {
  resp.send(`<form action="mail" method="post">
      <table>
        <tr>
          <th>보내는이:</th>
          <td><input type="email" name="sender" value="wodn2365@daum.net" /></td>
        </tr>
        <tr>
          <th>받는이:</th>
          <td><input type="email" name="receiver" /></td>
        </tr>
        <tr>
          <th>제목:</th>
          <td><input type="text" name="subject" /></td>
        </tr>
        <tr>
          <th>내용:</th>
          <td><textarea name="content"></textarea></td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="submit" value="메일보내기" />
          </td>
        </tr>
      </table>
    </form>`);
});
app.post("/mail", (req, resp) => {
  console.log(req.body);
  let data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    text: req.body.content,
  }; //from, to, subject, text(html)
  nodemail.mailSend(data);
  resp.send(data);
});

// "/excel_down" => customers 테이블의 데이터를 logs/customer2.xlsx로 저장.
app.get("/excel_down", async (req, resp) => {
  async function db_to_excel() {
    const workbook = xlsx.utils.book_new(); //workbook 생성.
    let resultSet = await sql.execute("select * from customers");
    console.log(resultSet);
    // 배열 => sheet : json_to_sheet. 구조: workbook > sheet > cell
    const firstSheet = xlsx.utils.json_to_sheet(resultSet, {
      header: ["id", "name", "email", "phone", "address"],
    });

    xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers"); // 시트생성.
    xlsx.writeFile(workbook, "./logs/customers2.xlsx"); //엑셀파일생성.
    // 시트 -> workbook -> customers.xlsx
  }
  db_to_excel();
  resp.json(resultSet);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
