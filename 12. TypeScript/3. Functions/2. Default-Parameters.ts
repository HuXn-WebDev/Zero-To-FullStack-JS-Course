function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const res = greet();
console.log(res);
