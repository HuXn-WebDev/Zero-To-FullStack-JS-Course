// --------------------------
// Assigning new variable names
const num = { x: 100, y: 200 };
const { x: new1, y: new2 } = num;

console.log(new1); //100
console.log(new2); //200
// --------------------------

// --------------------------
// Assignment without declaration
let name, division;
({ name, division } = { name: "HuXn", division: "First" });
console.log(name); // HuXn
console.log(division); // First
// --------------------------

// --------------------------
// Object destructuring and rest operator
let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(args);
// --------------------------
