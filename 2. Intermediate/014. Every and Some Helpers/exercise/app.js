// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let allProductsBooks = true;
let someProductsBooks = false;

for (let i = 0; i < products.length; i++) {
  if (products[i].category != "Books") {
    allProductsBooks = false;
  } else {
    someProductsBooks = true;
  }
}
console.log(allProductsBooks);
console.log(someProductsBooks);
// ---------------------------

// ---------------------------
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// do all products have a category of Books
// let allProductsBooks = products.every(function (product) {
//   return product.category === "Books";
// });

// do any products have a category of Books
// let someProductsBooks = products.some(function (product) {
//   return product.category === "Books";
// });

// console.log(allProductsBooks);
// console.log(someProductsBooks);
// ---------------------------
