// The "for...of" loop in JavaScript is a modern iteration statement introduced in ECMAScript 6 (ES6) that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more. It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.

// for (variable of iterable) {...}

// Here, variable is a variable that represents each value of the iterable during each iteration, and iterable is the iterable object being looped through.

let peoples = ["huxn", "alex", "john", "brad"];

for (let people of peoples) {
  console.log(people);
}

// Iterating over String
const text = "Hello";

for (const char of text) {
  console.log(char);
}
