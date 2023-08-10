const express = require("express");
const app = express();

/*
  Request 🙂

  Middleware 🤘

  Response 🙂
*/

// A middleware is just a javascript function
// Which Takes 3 parameters (req, res, next)

function userCredentials(req, res, next) {
  console.log("username: (alex)");
  console.log("email: (alex21@gmail.com)");
  console.log("password: (alex214)");
  console.log("age: (18)");
  next();
}

app.use(userCredentials);

app.get("/", (req, res) => {
  res.send("<h1>This is a homepage</h1>");
});

// ---------------------------------------
// app.get('/admin', userCredentials, (req, res) => {
//   res.send("<h2>Hello Admin </h2>")
// })

// app.get('/alex', userCredentials, (req, res) => {
//   res.send("<h2>Hello Alex</h2>")
// })
// ---------------------------------------

// Refactored
app.get("/admin", (req, res) => {
  res.send("<h2>Hello Admin </h2>");
});

app.listen(5000, () => console.log("Listening on port 5000"));
