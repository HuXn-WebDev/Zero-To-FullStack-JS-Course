// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

function user(name, age, work) {
  return {
    name: name,
    age: age,
    work: work,
    intro: function () {
      console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
    },
  };
}

const huxn = user("HuXn", 17, "Programmer");
huxn.intro();
