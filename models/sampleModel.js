const db = require("../database/config");

const Contact = {
  createSample: (name, email, phone, callback) => {
    const query = "INSERT INTO user (name, email, phone) VALUES (?, ?, ?)";
    db.query(query, [name, email, phone], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },
  getSample: (callback) => {
    const query = "SELECT * FROM user";
    db.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },
};

module.exports = Contact;
