//crypto_exe.js
const crypto = require("crypto");
let pass = crypto.createHash("sha512").update("test1234").digest("base64");
// test1234 => dfkldfjkdlsa;fjkdslafjsdkalfsdkl
// test1234 => (salt) djfkladsfjkdsalfjksdlafjlasdkf
//                    sdfasdkflasdfdjskalfdjskalfjdksla
console.log(pass);

// salt값을 생성하는 함수
// random 값이 만들어짐
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        //실패.
        reject(err);
      }
      //성공
      resolve(buf.toString("base64"));
    });
  });
  // promise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => console.error(err));
};
//createSalt(); //함수호출.
//salt 값을 활용해서 평문 -> 암호화문 변경.
const createCryptoPassword = async (trPw) => {
  let salt = await createSalt();
  console.log(salt);

  crypto.pbkdf2(trPw, createSalt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    //console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log("비밀번호가 동일함.");
    } else {
      console.log("비밀번호를 확인하세요.");
    }
  });
};
createCryptoPassword("test1234");
