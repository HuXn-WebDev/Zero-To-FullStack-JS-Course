// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used for transmitting data between a server and a web application, as well as for storing configuration settings and data.

// In JavaScript, JSON is represented as a string, and it closely resembles JavaScript object literal notation. It consists of key-value pairs, where keys must be strings, and values can be strings, numbers, booleans, arrays, or nested objects. The key-value pairs are separated by commas, and the entire JSON object is enclosed in curly braces {}.

// -----------------------
// JavaScript provides methods to work with JSON data:

// JSON.stringify(): Converts a JavaScript object into a JSON string.
// JSON.parse(): Parses a JSON string and returns a JavaScript object.
// -----------------------

// -----------------------
// Example
const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    zipCode: "10001",
  },
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString);
/* Output:
  {
    "name":"John Doe",
    "age":30,
    "email":"john@example.com",
    "isSubscribed":true,
    "hobbies":["Reading","Running","Cooking"],
    "address":{"city":"New York","zipCode":"10001"}
  }
*/

// Parse JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name); // Output: "John Doe"
console.log(parsedObject.hobbies); // Output: ["Reading", "Running", "Cooking"]
// -----------------------
