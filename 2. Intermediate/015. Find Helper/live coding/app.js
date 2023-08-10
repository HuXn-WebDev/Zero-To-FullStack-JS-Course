// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

// ------------------------------
const peoples = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];

const res = peoples.find((person) => person.name === "alex");
// const filterRes = peoples.filter(person => person.name === 'alex')
// console.log(filterRes);
console.log(res);
// ------------------------------

// ------------------------------
const posts = [
  { id: 1, content: "Good Post" },
  { id: 1, content: "funny Post" },
  { id: 1, content: "sad Post" },
];

const postRes = posts.find((post) => post.content === "funny post");
console.log(postRes);
// ------------------------------
