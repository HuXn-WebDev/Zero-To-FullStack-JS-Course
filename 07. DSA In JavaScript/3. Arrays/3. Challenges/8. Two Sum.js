// ⚠️ This is not better solution, we'll make it better in the upcoming videos!

function twoSum(nums, target) {
  // Loop through each number in the list
  for (let i = 0; i < nums.length; i++) {
    // For each number, check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no matching pair is found, return an empty array
  return [];
}

const res = twoSum([2, 7, 11, 15], 9);
const res2 = twoSum([1, 3, 7, 9, 2], 11);
console.log(res);
console.log(res2);
