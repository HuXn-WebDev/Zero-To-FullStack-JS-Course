import express from "express";
const app = express();

app.get("/get", (req, res) => {
  res.send("<h1>GET</h1>");
});

app.post("/post", (req, res) => {
  res.send("<h1>POST</h1>");
});

app.put("/put", (req, res) => {
  res.send("<h1>PUT</h1>");
});

app.patch("/patch", (req, res) => {
  res.send("<h1>PATCH</h1>");
});

app.delete("/delete", (req, res) => {
  res.send("<h1>DELETE</h1>");
});

app.listen(3000, () => console.log("Server Up!"));
