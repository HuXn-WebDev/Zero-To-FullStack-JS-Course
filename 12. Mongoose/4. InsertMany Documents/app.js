import express from "express";
import { insertManyDocs } from "./models/Movie.js";
const app = express();
const port = process.env.PORT || 8000;
import connectDB from "./db/connectDB.js";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/moviedb";

connectDB(DATABASE_URL);

insertManyDocs();

app.listen(port, () => console.log(`Server listening on port ${port}`));
