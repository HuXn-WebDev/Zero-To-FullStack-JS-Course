// -------------- ES5 Code
// // Superclass constructor
// function Animal(name) {
//   this.name = name;
// }

// // Method shared among all Animal instances
// Animal.prototype.makeSound = function () {
//   return "Unknown sound";
// };

// // Subclass constructor inheriting from Animal
// function Dog(name) {
//   Animal.call(this, name); // Call the superclass constructor
// }

// // Set up prototype chain for Dog to inherit from Animal
// Dog.prototype = Object.create(Animal.prototype);

// // Method specific to Dog
// Dog.prototype.makeSound = function () {
//   return "Woof!";
// };

// // Creating instances of the classes
// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.name); // Output: Generic Animal
// console.log(genericAnimal.makeSound()); // Output: Unknown sound

// const dog = new Dog("Buddy");
// console.log(dog.name); // Output: Buddy
// console.log(dog.makeSound()); // Output: Woof!

// ------------- Refactoring to Classes
// Superclass
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method shared among all Animal instances
  makeSound() {
    return "Unknown sound";
  }
}

// Subclass inheriting from Animal
class Dog extends Animal {
  constructor(name) {
    super(name); // Call the superclass constructor
  }

  // Method specific to Dog
  makeSound() {
    return "Woof!";
  }
}

// Creating instances of the classes
const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.name); // Output: Generic Animal
console.log(genericAnimal.makeSound()); // Output: Unknown sound

const dog = new Dog("Buddy");
console.log(dog.name); // Output: Buddy
console.log(dog.makeSound()); // Output: Woof!

// ---------------- Define
// Animal defined using a constructor function. The Animal prototype has a makeSound() method that is shared among all instances of Animal.

// The subclass Dog is created by defining another constructor function that inherits from Animal. We use Object.create() to set up the prototype chain so that Dog.prototype inherits from Animal.prototype. This establishes the inheritance relationship.

// The Dog prototype also has its own makeSound() method, which overrides the makeSound() method from the Animal prototype. This demonstrates how the Dog subclass can provide its specific implementation for the makeSound() method while reusing other functionalities from the Animal superclass.

// With this setup, instances of Dog can access both the properties and methods of the Animal superclass, as well as any methods that have been specifically defined for the Dog subclass.
