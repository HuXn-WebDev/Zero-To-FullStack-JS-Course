// -----------------------------------
// 1. Logical AND (&&)
//  -- TRUE if both the operands/boolean values are true, else evaluates to FALSE
const a = true,
  b = false;
const c = 4;

console.log(a && a); // true
console.log(a && b); // false

console.log(c > 2 && c < 2); // false

// -----------------------------------
// 2. Logical OR (||)
// -- TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE

console.log(a || b); // true
console.log(b || b); // false
console.log(c > 2 || c < 2); // true

// -----------------------------------
// 3. Logical NOT (!)
// TRUE if the operand is false and vice-versa.
console.log(!a); // false
console.log(!b); // true

// -----------------------------------
let password = "huxn-webdev";

if (password.length >= 8 && password.includes("web")) {
  console.log("VALID PASSWORD");
} else {
  console.log("Invalid password");
}
