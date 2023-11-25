// Define a union type
type MyType = string | number;

// Example function with type guard
function exampleFunction(value: MyType): void {
  // Type guard using typeof
  if (typeof value === "string") {
    // Within this block, TypeScript knows that 'value' is a string
    console.log(value.toUpperCase());
  } else {
    // Within this block, TypeScript knows that 'value' is a number
    console.log(value.toFixed(2));
  }
}

// Example usage
exampleFunction("hello"); // Outputs: HELLO
exampleFunction(42); // Outputs: 42.00
