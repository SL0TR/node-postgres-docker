import pg from "pg";
const { Pool } = pg;

const credentials = {
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "students",
};

const pool = new Pool(credentials);

export default pool;
