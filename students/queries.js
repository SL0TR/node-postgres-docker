export const getStudentsQuery = "SELECT * from students";
export const getStudentByIdQuery = "SELECT * from students WHERE id = $1";
export const deleteStudenByIdQuery = "DELETE from students WHERE id = $1";
export const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

export const updatetudentByIdQuery =
  "UPDATE students SET name = $1 WHERE id = $2 ";
