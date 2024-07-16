// ------------------ Example 1
function countDown(number) {
  if (number === 0) {
    console.log("And finally the stopping point! 🥂");
    return;
  }

  console.log(number);
  countDown(number - 1);
}

countDown(5);

// ------------------ Example 2
function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
  // return number === 0 ? 1 : number * factorial(number - 1);
}

console.log(factorial(4));
