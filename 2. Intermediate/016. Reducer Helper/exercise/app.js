// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
// const numbers = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// -------------------------------------

// Solution
function calculateProduct(arr) {
  const product = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return product;
}

const numbers = [2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product); // Output: 120
