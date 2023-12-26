// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// -----------------------------
// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
// -----------------------------

// -----------------------------
const user = {
  name: "Jen",
  age: 22,
};

const clonedUser = { ...user };
console.log(clonedUser);
