// 1. Create an array of numbers.
let numbers = [1, 2, 3, 4, 5];

// 2. Create a variable to hold the sum.
let sum = 0;

// 3. Create the adder function which takes the parameter of number & add that with sum variable.
function adder(number) {
  sum += number;
}

// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
numbers.forEach(adder);

// 5. print the sum variable.
console.log(sum);
