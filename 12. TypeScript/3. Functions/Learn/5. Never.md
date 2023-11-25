# Never

The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value.

Here are some common use cases for the never type:

1. A function that always throws an error:

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

The above function takes in a message of type string, throws an error with that message, and never returns anything. The return type of this function is never.

2. A function that has an infinite loop:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

The above function has an infinite loop, so it will never return anything. Its return type is also never.

3. A variable that can never have a value:

```ts
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns(); // This line will cause a compile-time error because the function never returns
```

In this example, the variable x is declared as type never. Since it is not assigned any value, it cannot have a value. If we try to assign it a value using a function that never returns (like neverReturns()), TypeScript will raise a compile-time error.

The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.
