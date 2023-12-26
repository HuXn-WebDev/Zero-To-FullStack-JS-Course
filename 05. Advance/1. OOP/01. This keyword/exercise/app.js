// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// *************** SOLUTION

// Create a person object
const person = {
  name: "John",
  age: 30,

  // Method using a regular function
  greetRegular: function () {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },

  // Method using an arrow function
  greetArrow: () => {
    return (
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

console.log(person.greetRegular()); // Output: Hello, my name is John and I am 30 years old.
console.log(person.greetArrow()); // Output: Hello, my name is undefined and I am undefined years old.
