# Interface

In TypeScript, an interface is a way to define a contract for a specific shape of an object. It defines the properties and methods that an object should have in order to be considered compatible with that interface.

To create an interface, you use the interface keyword followed by the name of the interface and the properties and methods it should contain, like this:

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}
```

In this example, we're defining an interface called Person that requires any object implementing it to have firstName, lastName, and age properties that are of type string, string, and number, respectively. It also requires an object implementing the Person interface to have a method called sayHello that takes no arguments and returns nothing (void).

You can then use this interface to check if an object matches its shape, like this:

```ts
function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  },
};

greet(john);
```

In this example, we're defining a function called greet that takes a Person object as its argument and logs a greeting message using its firstName and lastName properties. We're also calling the sayHello method on the Person object.

Then, we're creating a john object that implements the Person interface and passing it to the greet function. Since john matches the shape of the Person interface, the code runs without any errors.

Interfaces are a powerful tool in TypeScript that allow you to enforce type safety and make your code more maintainable and readable.

# Extending Interfaces

You can use the extends keyword to extend an interface. Here's an example:

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

In this example, we have an Animal interface with a name property. We then create a new Dog interface that extends the Animal interface using the extends keyword. The Dog interface adds a breed property to the base Animal interface.

When you extend an interface, the new interface inherits all the properties and methods of the base interface, and you can also add new properties or methods to the new interface.
