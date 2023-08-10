import express from "express";
import {
  allStudents,
  newStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.js";
const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.put("/delete", deleteStudent);

export default router;
