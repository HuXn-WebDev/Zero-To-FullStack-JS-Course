# Function Return Annotations

Function return type annotations in TypeScript are used to specify the expected return type of a function.

Here's an example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

In this example, we're declaring a function add that takes two number parameters a and b. The function is annotated with a return type of number, which means that it must return a numeric value.

If the function doesn't return a value that matches the specified return type, TypeScript will show an error:

```ts
function add(a: number, b: number): number {
  return "hello"; // Error: Type 'string' is not assignable to type 'number'.
}
```
