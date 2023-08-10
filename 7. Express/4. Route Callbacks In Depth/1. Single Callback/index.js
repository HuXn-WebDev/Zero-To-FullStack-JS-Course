import express from "express";
const app = express();

// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both

// ----------------------------
// One Callback Function 🛫
app.get("/", (req, res) => res.send("Single Callback"));
// ----------------------------

// ----------------------------
// More Then One Callback
//  - You cannot post response two times ❌
//  - Don't forget to pass the "next" function ⚠️
//  - (next) function will allows us to run another cb. 🏃‍♂️
//  - here in the first callback you can put your (logic) 🗯️

app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("First callback");
    next();
  },
  (req, res) => {
    res.send("More then one callback");
  }
);
// ----------------------------

app.listen(3000, () => console.log("Server Up!"));
