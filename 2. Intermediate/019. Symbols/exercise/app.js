// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

let sym = Symbol("foo");
typeof sym; // "symbol"
let symObj = Object(sym);
typeof symObj; // "object"

let obj = {};

obj[Symbol("a")] = "a";

for (let i in obj) {
  console.log(i); // logs "c" and "d"
}
