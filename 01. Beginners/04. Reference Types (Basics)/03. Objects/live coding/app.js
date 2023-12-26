// ------------------------
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}
// ------------------------

// ------------------------
// Creating Object
let person = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  location: ["Planet", "Earth"],
  isProgrammer: true,
};

// Accessing Properties
console.log(typeof person);
console.log(person.location[1]);
console.log(person["isProgrammer"]);
// console.log(person[isProgrammer]); // ERROR -> without quotes

// Updating Properties
console.log(person.firstName);
console.log((person.firstName = "Sam"));

// Add new properties
console.log((person.isProgrammer = false));
console.log(person);
