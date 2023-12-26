// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

// -------------------------------
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Create Variables
const a = "a";
const b = "b";
const c = "c";

for (let value of letters) {
  console.log(value);
}

// --------- TOTALLY OPTIONAL & ALSO REQUIRES THE KNOWLEDGE OF REGEX
// Write a function called (getUniqueLetters) that takes a string as input and returns a Set containing all the unique letters (case-insensitive) present in the string.

// output should look something like this 👇
// const text = "Hello World";

// const uniqueLettersSet = getUniqueLetters(text);
// console.log(uniqueLettersSet);
// OUTPUT 👉 Set(7) { 'h', 'e', 'l', 'o', ' ', 'w', 'r' }

// ************* SOLUTION

function getUniqueLetters(str) {
  const uniqueLetters = new Set();
  const lowercaseStr = str.toLowerCase();

  for (const char of lowercaseStr) {
    if (/[a-z]/i.test(char)) {
      uniqueLetters.add(char);
    }
  }

  return uniqueLetters;
}

const text = "Hello World";
const uniqueLettersSet = getUniqueLetters(text);
console.log(uniqueLettersSet);
