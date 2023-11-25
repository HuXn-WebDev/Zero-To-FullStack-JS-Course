# Type Narrowing

In TypeScript, type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

TypeScript provides several mechanisms for narrowing types, including:

1. Type guards: These are functions that return a boolean value indicating whether a value is of a certain type. For example, typeof can be used as a type guard to check if a value is a string or not.

2. The instanceof operator: This checks if an object is an instance of a particular class.

3. Discriminated unions: This is a pattern where a property is used to determine the specific subtype of an object.

4. Intersection types: If two types have overlapping properties, TypeScript will create a new type that includes only those properties that are common to both types.

Here's an example of using type narrowing with a type guard:

```ts
function printLength(strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
    console.log(strOrArray.length); // OK
  } else {
    console.log(strOrArray.length); // OK
  }
}
```

In this example, we use the typeof operator as a type guard to narrow the type of strOrArray. Inside the if block, TypeScript knows that strOrArray is a string, so we can safely call the length property. Similarly, inside the else block, TypeScript knows that strOrArray is an array of strings, so we can also safely call the length property.

Type narrowing helps prevent runtime errors by ensuring that our code is always working with variables of the correct type.
