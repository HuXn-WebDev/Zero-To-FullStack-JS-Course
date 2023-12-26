// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

// -----------------------
// const mySymbol = Symbol();
// const mySymbol = Symbol("My custom symbol");
// -----------------------

// const mySymbol1 = Symbol();
// const mySymbol2 = Symbol("My custom symbol");

// const obj = {};

// obj[mySymbol1] = "Value 1";
// obj[mySymbol2] = "Value 2";

// console.log(obj); // Output: { [Symbol()] : "Value 1", [Symbol(My custom symbol)] : "Value 2" }
// console.log(obj[mySymbol1]); // Output: "Value 1"
// console.log(obj[mySymbol2]); // Output: "Value 2"

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

console.log(symbol1);
console.log(typeof symbol1);
console.log(symbol1 === symbol2);

const huxn = {};
huxn.age = 17;
huxn["gender"] = "male";
huxn["female"] = "female";
huxn[symbol1] = "Alex";
huxn[symbol2] = "John";
console.log(huxn);
