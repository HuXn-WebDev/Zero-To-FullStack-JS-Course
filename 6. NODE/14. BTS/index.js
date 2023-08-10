// 👉 Blocking 👈
// console.log("Start");
// alert("Block");
// console.log("End");

// 👉- Non-Blocking 👈
// console.log("Start");
// setTimeout(() => {
//   alert("Non-Blocking");
// }, 1000);
// console.log("End");

// ****************************************************
// Without Callback
let fs = require("fs");

console.log("Start");

let data = fs.readFileSync("test.txt");
console.log(data.toString());

console.log("Ended ");

// -------------------------------------
// With Callback

// let fs = require("fs");

// console.log();

// console.log("Program Start");

// fs.readFile("test.txt", (err, res) =>
//   err ? console.log(err) : console.log(res.toString())
// );

// console.log("Program Ended");
// ****************************************************
