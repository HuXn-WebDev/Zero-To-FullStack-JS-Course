// Interface definition
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

// Usage
const computerExample: Computer = {
  name: "i7",
  ram: 16,
  hdd: 23000,
};

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);
// ---------------------------

// ----------------------------------
// Interface #1 (Simple Interface)
interface Movie {
  readonly name: string; // 👈 Readonly Property
  ratings: number;
  genra?: string; // 👈 Optional Property
}

const movie1: Movie = {
  name: "John Wick",
  ratings: 7,
  genra: "Action",
};

// movie1.name = "Another Movie" // 👈 ERROR
console.log(movie1);
// ----------------------------------
