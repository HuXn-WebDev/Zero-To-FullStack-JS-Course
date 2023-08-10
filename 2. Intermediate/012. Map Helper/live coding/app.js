// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5];

// So here what's going on, each number in the numbers array is being passed
// --> Into anonymous function that we're passing in,
// --> Whatever this function returns is placed into a new array,
// --> After each elements has being processed that new array is return.
let double = numbers.map((num) => num * 2);
console.log(double);
// -----------------

// -----------------
let peoples = [
  { firstName: "Macom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const results = peoples.map((person) => {
  return [person.firstName, person.lastName];
});

console.log(results);
// -----------------
