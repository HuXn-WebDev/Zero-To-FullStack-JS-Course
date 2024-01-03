# Type Aliases

A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

For example:

```ts
type MyString = string;
```

This defines a type alias called MyString that refers to the built-in string type.

Type aliases can also be used to define more complex types, such as object types, function types, union types, and intersection types.

```ts
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: "Alice", age: 25 };
printPerson(myPerson);
```

In this example, we've defined a Person type using an object type that has name and age properties. We've then defined a printPerson function that takes a parameter of type Person and logs out their name and age.

Finally, we've created a myPerson variable of type Person, initialized it with an object that has a name of "Alice" and an age of 25, and passed it to the printPerson function.

Note that we're using TypeScript annotations to explicitly specify the types of the variables and function parameters. This is not strictly necessary in this case because TypeScript can infer the types from the context, but it's generally a good practice to include explicit type annotations for readability and maintainability.
