import express from "express";
import student from "./routes/student.js";
const app = express();

// Controllers can group related request handling logic seperately.
// Instead of defining all of your request handling logic as callback in route or
// in route files, you may wish to organize this behavior using controllers modules.

app.use("/student", student);

app.listen(8000, () => console.log("Server Up!"));
