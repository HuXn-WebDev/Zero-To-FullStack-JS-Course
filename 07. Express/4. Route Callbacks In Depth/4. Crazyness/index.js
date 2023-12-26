import express from "express";
const app = express();

// Combination of independent function and array of function
const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};

app.get(
  "/cbexample4",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third callback");
    next();
  },
  (req, res) => {
    console.log("Fourth callback");
    res.send("Combination of independent function and array of function");
  }
);

app.listen(8000, () => console.log("Server Up!"));
