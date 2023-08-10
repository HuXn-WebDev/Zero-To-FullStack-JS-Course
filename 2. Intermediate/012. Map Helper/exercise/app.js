// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

const numbers = [65, 44, 12, 4];

function myFunction(num) {
  return num * 10;
}

const newArr = numbers.map(myFunction);
console.log(newArr);
