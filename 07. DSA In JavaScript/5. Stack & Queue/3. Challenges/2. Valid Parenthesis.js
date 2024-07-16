const isValidParenthesis = (str) => {
  // Use a stack to store opening brackets
  const stack = [];

  // Map opening brackets to their closing counterparts
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // Loop through each character in the string
  for (let char of str) {
    // If it's an opening bracket, push it to the stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      // If it's a closing bracket, check if it matches the top of the stack
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  // After iterating, check if the stack is empty (all brackets were matched)
  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false
