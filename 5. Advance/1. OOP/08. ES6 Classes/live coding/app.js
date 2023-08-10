// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration
class Person {
  constructor(firstName, lastName, age) {
    // Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    };
  }
  // Prototype Members
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// const alex = new Person("Alex", "Mead", 19);
// console.log(alex);
// console.log(alex.printUserInfo());

// Inheritance
class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); // This just calls the parent class constructor
    this.pl = pl;
    this.experience = experience;
  }
}

const john = new Programmer("John", "Doe", 19, "JavaScript", 12);
console.log(john);
console.log(john.greeting());
