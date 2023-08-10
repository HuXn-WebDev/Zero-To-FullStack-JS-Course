// In JavaScript, try and catch are keywords used to implement error handling. Error handling is essential when writing code to gracefully handle unexpected errors and exceptions that may occur during program execution. The try and catch blocks work together to enable developers to catch and handle errors, preventing them from crashing the entire application.

function parseJSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    return parsedData;
  } catch (error) {
    // Handling the error
    console.error("An error occurred while parsing JSON:", error.message);
    return null; // Return null as a default value in case of an error
  }
}

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30,}';

const result1 = parseJSON(validJSON);
console.log(result1); // Output: { name: "John", age: 30 }

const result2 = parseJSON(invalidJSON);
// Output: An error occurred while parsing JSON: Unexpected token } in JSON at position 26 null
