# Literal Types

In TypeScript, literal types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

There are several types of literal types in TypeScript:

1. String Literal Types - This allows you to specify the exact value of a string that a variable can contain. For example:

```ts
let color: "red" | "blue" | "green";
color = "red"; // valid
color = "yellow"; // invalid
```

2. Numeric Literal Types - This allows you to specify the exact value of a number that a variable can contain. For example:

```ts
let number: 1 | 2 | 3;
number = 1; // valid
number = 4; // invalid
```

3. Boolean Literal Types - This allows you to specify the exact value of a boolean that a variable can contain. For example:

```ts
let isTrue: true;
isTrue = true; // valid
isTrue = false; // invalid
```
