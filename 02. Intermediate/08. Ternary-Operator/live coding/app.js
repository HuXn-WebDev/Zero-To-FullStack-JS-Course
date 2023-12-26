// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

// ------------------------------------
let password = 2;

function passwordChecker(ps) {
  // if (ps === 8) {
  //     return "Strong Password"
  // } else {
  //     return "Password should be 8 characters"
  // }

  return ps === 8 ? "Strong Password" : "Password should be 8 characters";
}

console.log(passwordChecker(password));
// -------------------------------

// -------------------------------
const age = 25;

// Using the ternary operator to determine if a person is an adult or not
const isAdult = age >= 18 ? "Adult" : "Not an Adult";

console.log(isAdult); // Output: "Adult"
// -------------------------------
