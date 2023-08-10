import express from "express";
import connectDB from "./db/connectdb.js";
import { deleteOne, deleteMany } from "./models/Movie.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schooldb";

connectDB(DATABASE_URL);

// deleteOne("649ab23e38eecfddee75ea65");
deleteMany();

app.listen(port, () => console.log(`Server running on port ${port}`));
