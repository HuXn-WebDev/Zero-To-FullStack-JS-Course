////////////////////////////////////////////////
// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens
let colors = ["teal", "blue", "red", "green"];

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

colors.forEach((color) => console.log(color));

/////////////////////////////////////////////////
const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);
