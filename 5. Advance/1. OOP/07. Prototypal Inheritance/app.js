// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.

// // Parent constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of Animal
Animal.prototype.sound = function () {
  return "Animal sound";
};

// Child constructor function inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Set Dog's prototype to an instance of Animal to establish inheritance
Dog.prototype = Object.create(Animal.prototype);

// Adding a method specific to Dog's prototype
Dog.prototype.bark = function () {
  return "Woof!";
};

// Creating a Dog instance
const dog1 = new Dog("Buddy", "Labrador");

console.log(dog1.name); // Buddy
console.log(dog1.sound()); // Animal sound
console.log(dog1.breed); // Labrador
console.log(dog1.bark()); // Woof!

// --------------------------------------
// Super Class
// const Mobile = function () {
//   this.a = 10;
// };

// Mobile.prototype.z = 30;

// const Samsung = function () {
//   Mobile.call(this);
//   this.b = 20;
// };

// // Prototype Inheritance
// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

// const s = new Samsung();
// console.log(s.a);
// console.log(s.b);
// console.log(s.z);
