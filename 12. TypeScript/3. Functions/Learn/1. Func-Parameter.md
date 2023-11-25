# Function Parameter Annotations

Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.

Here's an example:

```ts
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
```

In this example, we're declaring a function greet with a single parameter name. The name parameter is annotated with the type string, which means that it can only accept string values.

```ts
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

If we call the greet function with a non-string value, TypeScript will show an error:
