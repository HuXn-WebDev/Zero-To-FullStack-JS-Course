import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All teacher");
});

router.post("/create", (req, res) => {
  res.send("New teacher created");
});

router.put("/update", (req, res) => {
  res.send("teacher updated");
});

router.put("/delete", (req, res) => {
  res.send("teacher Deleted");
});

export default router;
