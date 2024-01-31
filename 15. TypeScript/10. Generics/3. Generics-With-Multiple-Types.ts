// --------------------------
// Generic function to reverse the order of two values
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

// Example usage
const reversedPair = reversePair("Hello", 42);
console.log(reversedPair); // Outputs: [42, "Hello"]
// --------------------------

// --------------------------
// Generic function to combine two values into an array
function combineValues<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

// Example usage
const combinedStringAndNumber = combineValues("Hello", 42);
console.log(combinedStringAndNumber); // Outputs: ["Hello", 42]

const combinedBooleanAndArray = combineValues(true, [1, 2, 3]);
console.log(combinedBooleanAndArray); // Outputs: [true, [1, 2, 3]]
// --------------------------
