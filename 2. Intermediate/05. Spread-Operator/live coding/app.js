// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// ------------------------------------
// SPREAD IN A FUNCTION CALL
// let mx = Math.max(2, 4, 6, 7, 8, 1, 5, 10);
// let mn = Math.min(2, 4, 6, 7, 8, 1, 5, 10);
// console.log(mx);
// console.log(mn);

// const nums = [56, 24, 12, 55, 11, 10];
// console.log(Math.max(nums)); //NaN
// console.log(Math.max(...nums)); // Spreading Each Element into indivual arguments

// function giveMe4(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// giveMe4(1, 2, 3, 4);

// const colors = ["red", "orange", "yellow", "green"];
// giveMe4(colors); // a will be whole array & others will be undefined
// giveMe4(...colors); // We're spreading that array into sperate arguments

// let string = "HuXn WebDev";
// giveMe4(...string); // Spread each element in "string"

// ------------------------------------
// SPREAD IN ARRAY
const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];
const concat = [...strNums, ...moreStrNums];
console.log(concat);

let peoples = ["huxn", "john", "alex"];
console.log("kumar", ...peoples, "john doe");
let friends = ["jordan", "frad", "brad", ...peoples];
console.log(friends);

// ------------------------------------
// SPREAD WITH OBJECT

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// add members obj1 and obj2  to obj3
const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // {x: 1, y: 2, z: 3}

// let person = {
//   name: "HuXn",
//   age: 17,
//   gender: "Male",
// };

// const clone = { ...person, work: "Programming", location: "idk" };
// console.log(clone);
