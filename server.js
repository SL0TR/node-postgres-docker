import bodyParser from "body-parser";
import express from "express";
import studentRoutes from "./students/routes.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`app listening on port:${port}`);
});
