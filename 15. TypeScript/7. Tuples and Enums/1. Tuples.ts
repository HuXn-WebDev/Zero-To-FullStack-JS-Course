// ----------------------
let myTuple: [number, string];
myTuple = [2, "Hello World"]; // Valid🥂
// myTuple = ["Hello World", 2]; // Not Valid ⚠️
console.log(myTuple);
// ----------------------

// ----------------------
const products: (number | string)[] = ["Item 1", 23];
console.log(products);
// ----------------------

// ----------------------
const games: [string, string, string] = ["Game 1", "Game 2", "Game 3"];
console.log(games);
// ----------------------
