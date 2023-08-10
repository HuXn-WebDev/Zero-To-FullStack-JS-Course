// Example using closures for private and protected members
function MyClass(publicField, privateField, protectedField) {
  // Public field
  this.publicField = publicField;

  // Private field (closure)
  const _privateField = privateField;

  // Protected field (closure)
  const _protectedField = protectedField;

  // Public method
  this.publicMethod = function () {
    return `Public field: ${this.publicField}`;
  };

  // Private method (closure)
  function _privateMethod() {
    return `Private field: ${_privateField}`;
  }

  // Protected method (closure)
  function _protectedMethod() {
    return `Protected field: ${_protectedField}`;
  }

  // Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
}

const myObject = new MyClass("Public data", "Private data", "Protected data");

console.log(myObject.publicField); // Accessing public field
console.log(myObject.publicMethod()); // Accessing public method

// These lines will cause errors since they access private and protected members directly.
// console.log(myObject.privateField); // Error: privateField is not defined
// console.log(myObject._privateMethod()); // Error: _privateMethod is not a function
// console.log(myObject.protectedField); // Error: protectedField is not defined
// console.log(myObject._protectedMethod()); // Error: _protectedMethod is not a function

console.log(myObject.accessProtectedMethod()); // Accessing protected method indirectly
