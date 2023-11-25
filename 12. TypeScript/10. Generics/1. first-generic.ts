// ------------- Without Generics -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }

// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }

// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }

// // Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]

// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']

// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------

// --------------- Using Generics ---------------
function uniqueDataTypeFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

// Example usage
const num = uniqueDataTypeFunc<number>(42, 0);
console.log(num); // Outputs: [42, 0]

const str = uniqueDataTypeFunc<string>("hello", "world");
console.log(str); // Outputs: ['hello', 'world']

// Example usage with a custom type
interface Dog {
  name: string;
  breed: string;
}

const dogPair = uniqueDataTypeFunc<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);

console.log(dogPair); // Outputs: [{ name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' }]
