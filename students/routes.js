import app from "express";
import {
  addStudent,
  deleteStudentById,
  getStudentById,
  getStudents,
  updateStudentById,
} from "./controller.js";
const { Router } = app;

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.delete("/:id", deleteStudentById);
router.put("/:id", updateStudentById);

export default router;
