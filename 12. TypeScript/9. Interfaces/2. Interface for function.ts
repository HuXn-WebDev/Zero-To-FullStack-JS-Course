// ---------------------------
// Example 1

// Interface for a function
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2));
// ---------------------------

// ---------------------------
// Example 2

// Define an interface for a Car
interface Car {
  brand: string;
  model: string;
  year: number;
}

// Function that accepts an object adhering to the Car interface
function displayCarInfo(car: Car): void {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

// Create an object that adheres to the Car interface
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

// Call the function with the object
displayCarInfo(myCar);
// ---------------------------
