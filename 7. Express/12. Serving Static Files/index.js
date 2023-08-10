const path = require("path");
const express = require("express");
const app = express();

// app.use(express.static)
// express.static is a built-in middleware, which allow us to serve our static files.

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(5000, () => console.log("Listening on port 5000"));
