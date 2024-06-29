const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "192.185.74.209",
  user: "yourchoi_job_portal_db_user",
  password: "M!P--c(s={DY",
  database: "yourchoi_job_portal_db",
});

module.exports = connection;
