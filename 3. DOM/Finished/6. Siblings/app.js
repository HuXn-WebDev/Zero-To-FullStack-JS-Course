// -----------------------------
// let firstLi = document.querySelector("li");

// console.log(firstLi.parentElement); // ul
// console.log(firstLi.parentElement.parentElement); // body
// console.log(firstLi.parentElement.parentElement.parentElement); // html
// console.log(firstLi.parentElement.parentElement.parentElement.parentElement); // null
// -----------------------------

// -----------------------------
// let ul = document.querySelector("ul");

// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[2].innerText);
// ul.children[2].innerText = "Apple";
// -----------------------------

// Next Element Sibling
// console.log(firstLi.nextElementSibling.textContent);
// console.log(firstLi.nextElementSibling.nextElementSibling.textContent);
// console.log(
//   firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent
// );
// console.log(
//   firstLi.nextElementSibling.nextElementSibling.nextElementSibling
//     .nextElementSibling.textContent
// );

// Previous Element Sibling
let fourthLi = document.querySelector(".fourth");
console.log(fourthLi);
console.log(fourthLi.previousElementSibling.textContent);
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent);
