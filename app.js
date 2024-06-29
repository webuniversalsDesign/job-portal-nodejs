const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./database/config");
const contactRoutes = require("./routes/sampleRoute");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

connection.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

app.use("/api/user", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
