// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)
// 4. Compare strings

const palindrome = (str) => str.split("").reverse().join("") === str;

console.log(palindrome("cddc"));
console.log(palindrome("Hello"));
