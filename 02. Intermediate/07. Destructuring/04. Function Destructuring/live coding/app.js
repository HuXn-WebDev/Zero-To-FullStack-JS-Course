// -------------------------------
const person = {
  name: "John Doe",
  age: 30,
  country: "USA",
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);
// -------------------------------

// -------------------------------
// Example 2
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// The (w) & (h) property is essentially renaming the (width) & (height) props

function showMenu({
  title = "Untitled",
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2], // items first element goes to item1, second to item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(options);
// -------------------------------

// In the showMenu function, renaming the properties to w and h from width and height is done as part of the destructuring process. This allows the function to use shorter and more convenient variable names while still extracting the corresponding values from the object.

// The main reasons for renaming properties during destructuring are:

// Shorter and More Concise Code: Renaming properties to shorter names can make the code more concise and easier to read. In this case, using w and h instead of width and height requires less typing and reduces the visual clutter, especially if you use the properties multiple times within the function.

// Avoiding Naming Conflicts: If the function already has variables named width and height, renaming the properties during destructuring prevents naming conflicts. This allows you to access the properties from the object without overwriting existing variables with the same names.

// Default Value Assignment: Renaming also allows you to assign default values to the renamed variables. In the example code, width: w = 100 and height: h = 200 mean that if the width and height properties are missing in the object being passed to the function, w will be assigned the default value 100, and h will be assigned the default value 200.
