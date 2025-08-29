// app.js
const express = require("express");
const parser = require("body-parser");
const sql = require("./sql");
const prodSql = require("./sql/sql"); // {productList:{query:``}, productDetail:{}}
const cors = require("cors");
//console.log(prodSql["imageList"].query);

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 상품쿼리.
app.post("/api/:alias", async (req, resp) => {
  // api?alias=dawdasd
  let search = prodSql[req.params.alias].query;
  let param = req.body.param; //[{product_id:9, type:1, path:test.jpg}], param :[2]

  console.log(search);
  console.log(param);

  try {
    let result = await sql.execute(search, param);
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "error" });
  }
});

//고객목록.
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    console.log(customerList);
    resp.json(customerList);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "error" });
  }
});

app.post("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.execute(
      "insert into customers set ?", //
      [req.body.param]
    );
    console.log(result);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "error" });
  }
});

//http://localhost:8080/boardList.do?page=3
//http://localhost:3000/customer/:id
app.delete("/customer/:id", async (req, resp) => {
  console.log(req.params.id);
  try {
    let result = await sql.execute(
      "delete from customers where id = ?", //
      [req.params.id]
    );
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "error" });
  }
});

app.put("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.execute(
      "update customers set ? where id = ?", //
      req.body.param
    );
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
