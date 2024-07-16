// Function Signature:

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T } { ... }
// The function is named getRandomKeyValuePair.
// It is a generic function denoted by <T>, meaning it can work with different types specified when calling the function.
// Parameters:

// obj: { [key: string]: T }: The function takes an object (obj) with keys of type string and values of type T.
// This is a common pattern in TypeScript to represent a dictionary-like object where keys are strings and values can be of any type (T).
// Function Body:

// const keys = Object.keys(obj);: Gets an array of keys from the input object using Object.keys.
// const randKey = keys[Math.floor(Math.random() * keys.length)];: Randomly selects a key from the array of keys using a random index.
// return { key: randKey, value: obj[randKey] };: Returns an object with two properties — key (the randomly chosen key) and value (the corresponding value from the input object).
// Return Type:

// : { key: string; value: T }: The function returns an object with a fixed structure — a key property of type string and a value property of type T.

// Generic function to get a random key-value pair from an object
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

// Example usage with strings
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair); // Outputs: { key: 'a', value: 'apple' } (random)

// Example usage with numbers
const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair); // Outputs: { key: 'two', value: 2 } (random)

// Inferring type
const inferredStringPair = getRandomKeyValuePair(stringObject);
console.log(inferredStringPair); // Outputs: { key: 'b', value: 'banana' } (random)

const inferredNumberPair = getRandomKeyValuePair(numberObject);
console.log(inferredNumberPair); // Outputs: { key: 'three', value: 3 } (random)
// ------------------------------------------------

// ------------------------------------------------
// Generic function to filter an array based on a condition
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

// Example usage with an array of numbers
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]

// Example usage with an array of strings
const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords); // Outputs: ["apple", "date"]

// Example usage with an array of objects
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(redFruits); // Outputs: [{ name: 'Apple', color: 'Red' }, { name: 'Cherry', color: 'Red' }]
// ------------------------------------------------
