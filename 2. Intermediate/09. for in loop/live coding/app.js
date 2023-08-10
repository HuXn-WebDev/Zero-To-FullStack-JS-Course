// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

// Here, variable is a variable that will represent each property name (key) during each iteration, and object is the object being looped through.

// --------------------------
let person = {
  name: "HuXn",
  age: 17,
  gender: "Male",
};

for (let key in person) {
  console.log(key, person[key]);
}
// --------------------------

// --------------------------
let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}
// --------------------------
