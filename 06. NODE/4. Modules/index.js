// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Now that we've learned about "module wrapper" that's why we know
// that every file is a module (by default).

const { person1, person2, person3 } = require("./names");
const { num1, num2, num3 } = require("./numbers");
const greetings = require("./greetings");
const calculate = require("./calculate");

greetings(person1);

console.log(person1);
console.log(person2);
console.log(person3);

console.log(num1);
console.log(num2);
console.log(num3);
calculate(num2, num3);

// calculate(10, 20);

// greetings(person1);
// greetings(person2);
// greetings(person3);

// console.log(person1);
// console.log(person2);
// console.log(person3);
