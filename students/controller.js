import pool from "../db.js";
import {
  addStudentQuery,
  deleteStudenByIdQuery,
  getStudentByIdQuery,
  getStudentsQuery,
  updatetudentByIdQuery,
} from "./queries.js";

export const getStudents = async (_, res) => {
  try {
    const results = await pool.query(getStudentsQuery);

    if (results.rows) {
      res.status(200).send(results.rows);
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const getStudentById = async (req, res) => {
  const id = parseInt(req?.params?.id);

  try {
    const results = await pool.query(getStudentByIdQuery, [id]);

    if (results?.rowCount) {
      res.status(200).send(results.rows[0]);
      return;
    }
    res.status(400).send(`No student found with id: ${id}`);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const deleteStudentById = async (req, res) => {
  const id = parseInt(req?.params?.id);

  try {
    const results = await pool.query(deleteStudenByIdQuery, [id]);

    if (results?.rowCount) {
      res.status(200).send("Student deleted successfully");
      return;
    }

    res.status(400).send(`No student found with id: ${id}`);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const updateStudentById = async (req, res) => {
  const id = parseInt(req?.params?.id);

  const { name } = req.body;

  try {
    const results = await pool.query(updatetudentByIdQuery, [name, id]);
    if (results?.rowCount) {
      res.status(200).send("Student updated");
      return;
    }

    res.status(400).send(`No student found with id: ${id}`);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const addStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;

  try {
    await pool.query(addStudentQuery, [name, email, age, dob]);
    res.status(200).send("Student created");
  } catch (e) {
    res.status(400).send(e.message);
  }
};
