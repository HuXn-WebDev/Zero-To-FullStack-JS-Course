// ------------------------------------
// function findPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(`Pair: ${arr[i]}, ${arr[j]}`);
//     }
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// findPairs(numbers);
// ------------------------------------

// ------------------------------------
// Drop Non-Dominants
function findPairs(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < 5; q++) {
    console.log("-------------", q);
  }

  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our bigO
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);
// ------------------------------------
