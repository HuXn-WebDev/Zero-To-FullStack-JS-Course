// a method is a function that is associated with an object. It allows objects to perform actions or provide functionalities.

// ------------------------------------
// Defining a method outside the object
// function greet() {
//   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

// ------------------------------------

const person = {
  name: "HuXn",
  age: 19,
  greet: function greet() {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
  },
};

console.log(person.greet());
// ------------------------------------
