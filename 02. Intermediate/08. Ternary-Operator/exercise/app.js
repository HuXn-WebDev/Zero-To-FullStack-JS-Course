// -------------------------------------
// REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);
// -------------------------------------

// -------------------------------------
// ternary operator to check the eligibility to vote
let age = 15;
let result =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
// -------------------------------------

// -------------------------------------
// Create a program which checks if number is positive, negative or zero
let a = 3;
let res = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${res}.`);
// -------------------------------------
