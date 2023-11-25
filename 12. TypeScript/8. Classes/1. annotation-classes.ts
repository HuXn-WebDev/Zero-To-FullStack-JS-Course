// class #1 (properties annotations)
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("John", 30);
// console.log(person);

// class #2 (class fields)
// class Person {
//   name: string;
//   age: number;
//   location: string = "USA"; // 👈 class field

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("John", 30);
// console.log(person);

// class #3 (readonly props)
// class Person {
//   readonly name: string;
//   readonly age: number;
//   location: string = "USA";

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("John", 30);
// console.log(person.age);
// person.age = 20; // ERROR ⚠️

// class #4 (public modifier)
// class Person {
//   public name: string;
//   public age: number;
//   location: string = "USA";

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("John", 30);
// person.age = 20;
// console.log(person.age);
