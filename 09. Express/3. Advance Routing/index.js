import express from "express";
const app = express();

// In path area you can either pass simple Strings or Regular Expressions

// --------------------------------------
// String Pattern Path
app.get("/ab?cd", (req, res) => {
  res.send("If the user hit (acd) or (abcd) then this code will run.");
});

// --------------------------------------

// --------------------------------------
// Regular Expression (Regex) Path
app.get(/a/, (req, res) => {
  res.send("If the path includes the letter (a) it will work");
});

// Matches requests to /users/ followed by any 4-digit number
// /users/1234
app.get(/^\/users\/[0-9]{4}$/, function (req, res) {
  res.send("Working");
});
// --------------------------------------

app.listen(3000, () => console.log("Server Up!"));
