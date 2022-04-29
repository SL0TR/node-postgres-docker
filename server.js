const { Client } = require("pg");

const credentials = {
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
};

const client = new Client(credentials);

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
