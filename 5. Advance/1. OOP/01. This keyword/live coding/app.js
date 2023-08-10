// --------------------------
// Using "this" as a global scope
console.log(window);
console.log(this);
console.log(this === window);

window.firstName = "HuXn";
this.lastName = "WebDev";

let fullName = function () {
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};

fullName();
// --------------------------

// --------------------------
// Using "this" in object
const obj = {
  name: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // this keyword will now refer to the owner obj which in this case is
    // the (obj)
    // return this;
    return `${this.name} ${this.lastName}`;
  },
};

const res = obj.fullName();
console.log(res);
// --------------------------

// --------------------------
// Using "this" in Function
function callThis() {
  return this;
}

const res2 = callThis();
console.log(res2);
// --------------------------

// --------------------------
// using "this" keyword in arrow method
const obj2 = {
  name: "John",
  regularFunction: function () {
    return this.name;
  },
  arrowFunction: () => this.name,
};

console.log(obj2.regularFunction()); // Output: 'John'
console.log(obj2.arrowFunction()); // Output: undefined
// --------------------------

// --------------------------
let huxn = {
  firstName: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // let firstName = "HuXn";
    // let lastName = "WebDev";
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

huxn.fullName();
// --------------------------
