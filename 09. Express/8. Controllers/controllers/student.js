import express from "express";

const allStudents = (req, res) => {
  res.send("All Student");
};

const newStudent = (req, res) => {
  res.send("New Student created");
};

const updateStudent = (req, res) => {
  res.send("Student updated");
};

const deleteStudent = (req, res) => {
  res.send("Student Deleted");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
