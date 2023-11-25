import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (_, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
