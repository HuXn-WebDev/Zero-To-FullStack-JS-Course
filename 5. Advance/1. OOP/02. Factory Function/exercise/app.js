// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

// Create a factory function for vehicles
function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

// Create two different vehicles using the factory function
const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2020);
const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);

// Test the vehicles
console.log(vehicle1); // { type: 'Car', brand: 'Toyota', model: 'Camry', year: 2020 }
console.log(vehicle2); // { type: 'Motorcycle', brand: 'Honda', model: 'CBR500R', year: 2019 }
