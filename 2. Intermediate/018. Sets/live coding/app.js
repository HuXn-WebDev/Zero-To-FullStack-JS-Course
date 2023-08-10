// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.

// const mySet = new Set(); // empty set
// const initialValues = [1, 2, 3];
// const mySet = new Set(initialValues); // list added

// const mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("orange");
// mySet.add("apple"); // Duplicate value; will be ignored

// console.log(mySet); // Set(3) { 'apple', 'banana', 'orange' }

// console.log(mySet.has("banana")); // true
// console.log(mySet.has("grape")); // false

// mySet.delete("orange");
// console.log(mySet); // Set(2) { 'apple', 'banana' }

// mySet.clear();
// console.log(mySet); // Set(0) {}
// -------------------------------------------------

const set = new Set();

set.add();
set.add("string");
set.add({ name: "huxn" });
set.add(10);

console.log(set.size);
console.log(set.keys());
console.log(set.has({ name: "huxn" }));

set.delete(10);
console.log(set);

// Iterating over sets.
for (let item of set) {
  console.log(item);
}
