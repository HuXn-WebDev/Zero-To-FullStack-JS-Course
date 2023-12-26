// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

console.log(first.innerHTML);
console.log(second.textContent);
console.log(third.innerHTML);
