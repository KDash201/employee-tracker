const mysql = require("mysql2");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
});

module.exports = db;
