// -------------------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

// -------------------------------
// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

greet(); // calling function

// -------------------------------
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("HuXn"); // calling function
// -------------------------------
// The return statement can be used to return the value to a function call.
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
  // console.log("Hello World"); NOTHING
}

const result = add(10, 20);
console.log(result);
// -------------------------------
