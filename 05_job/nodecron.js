//nodecron.js
 const cron = require("node-cron");

cron.schedule(" 15 * * * *", () => {
  let current = new Date();
  console.log(current.toISOString() + " => cron실행됨.");
});
