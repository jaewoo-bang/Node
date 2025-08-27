//nodemail.js
const nodemail = require("nodemailer");

let transporter = nodemail.createTransport({
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SEND_MAIL,
    pass: process.env.DAUM_PASS,
  },
});

const mailSend = (data = {}) => {
  transporter.sendMail(data, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result.messageIdz + "를 확인하세요");
    return result.messageIdz;
  });
};

module.exports = {
  mailSend,
};
//wpjosvamrwkslljx
