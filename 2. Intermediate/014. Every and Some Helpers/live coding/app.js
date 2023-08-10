//////////////////////////////////////////
// The every() and some() are two built-in array methods in JavaScript that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition.

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

//////////////////////////////////////////

const peoples = ["huxn", "jordan", "alex"];

const res = peoples.every((people) => people.length === 4);
const res2 = peoples.some((people) => people.length < 3);

console.log(res);
console.log(res2);

//////////////////////////////////////////
const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

const everyRes = songs.every((song) => song.duration > 3);
const someRes = songs.some((song) => song.duration > 3);
console.log(everyRes);
console.log(someRes);
