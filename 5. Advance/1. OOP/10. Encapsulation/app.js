// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Counter() {
  let count = 0; // Private variable

  // Public methods that can access and modify the private variable
  this.increment = function () {
    count++;
  };

  this.decrement = function () {
    count--;
  };

  this.getCount = function () {
    return count;
  };
}

const counter = new Counter();
console.log(counter.getCount()); // Output: 0

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2

counter.decrement();
console.log(counter.getCount()); // Output: 1

// The private variable 'count' cannot be accessed directly outside the object
// console.log(counter.count); // Error: count is not defined

// ----------------- Define
// In this example, we create a Counter constructor function, and inside it, we define a private variable count using the let keyword. The increment, decrement, and getCount functions are defined as public methods, accessible from outside the object.

// Since the private variable count is defined inside the Counter constructor function, it forms a closure. The public methods have access to this private variable due to the lexical scope of JavaScript closures.

// The key idea here is that the count variable is not directly accessible from outside the Counter object. The public methods increment, decrement, and getCount provide controlled access to the private variable, allowing us to modify or retrieve its value indirectly. This way, we achieve encapsulation by hiding the internal implementation details of the Counter object and exposing only the necessary interface for interacting with it.
