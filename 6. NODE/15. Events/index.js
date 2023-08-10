const EventEmitter = require("events");

//  Creating Instance
const customEmitter = new EventEmitter();

// We have two useful objects, in that object
// 1. on 👉 listen/register for an event
// 2. emit 👉 emit/call an event

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with:${id}`);
});

// 1. We can create as many events as we want.
// 2. The order "really" matters
// 3. We can pass the arguments, when we're emitting the arguments.
customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "john", 34);
