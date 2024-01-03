import express from "express";
import web from "./routes/web.js";
const app = express();

app.set("view engine", "ejs");
app.use("/", web);

app.listen(8000, () => console.log("Server Up!"));
