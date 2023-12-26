// -----------------------------------
// An array is an object that can store multiple values at once. For example,
// const words = ["hello", "world", "welcome"];
// ['string', 123, true, []]
// -----------------------------------

// -----------------------------------
// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ["eat", "work", "sleep"];

// array with mixed data types
// const newData = ["work", "exercise", 1, true];
// -----------------------------------
const newData = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];

// -----------------------------------
// ACCESSING ITEMS
const myArray = ["h", "e", "l", "l", "o"];

// first element
console.log(myArray[0]); // "h"

// second element
console.log(myArray[1]); // "e"
