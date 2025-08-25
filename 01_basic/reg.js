let reg = /world/g;
// reg = new RegExp("World");

let str = `Hello Hi..
World!
World`;

console.log(str.replace(/world/gi, "세상!"));

console.log(reg.exec(str));
