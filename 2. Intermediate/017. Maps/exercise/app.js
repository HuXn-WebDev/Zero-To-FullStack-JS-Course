// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// expected output: 1

console.log(map1.size);
// expected output: 3

map1.delete("b");

console.log(map1.size);
// expected output: 2

// ------------------------------------------
// Write a function called countCharacters that takes a string as input and returns a Map that contains each character in the string as a key and the count of occurrences of that character as the value.

// Something like this 👇
// const text = "hello";

// const characterCountMap = countCharacters(text);
// console.log(characterCountMap);

// output
// Map(4) {
//     'h' => 1,
//     'e' => 1,
//     'l' => 2,
//     'o' => 1
//   }

// ************* SOLUTION
function countCharacters(str) {
  const characterCountMap = new Map();

  for (const char of str) {
    const count = characterCountMap.get(char) || 0;
    characterCountMap.set(char, count + 1);
  }

  return characterCountMap;
}

// Testing the function with the example string
const text = "hello";
const characterCountMap = countCharacters(text);
console.log(characterCountMap);
// ------------------------------------------
