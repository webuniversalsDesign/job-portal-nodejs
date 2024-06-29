const db = require("../database/config");

const Contact = {
  createSample: (
    name,
    email,
    phone,
    register_date,
    looking_for,
    experience_level,
    job_role,
    address,
    callback
  ) => {
    const query =
      "INSERT INTO user (name, email, phone, register_date, looking_for, experience_level, job_role, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        name,
        email,
        phone,
        register_date,
        looking_for,
        experience_level,
        job_role,
        address,
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        callback(null, result);
      }
    );
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
  getById: (id, callback) => {
    const query = "SELECT * FROM user WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },
  updateSample: (
    id,
    name,
    email,
    phone,
    register_date,
    looking_for,
    experience_level,
    job_role,
    address,
    callback
  ) => {
    const query =
      "UPDATE user SET name = ?, email = ?, phone = ?, register_date = ?, looking_for = ?, experience_level = ?, job_role = ?, address = ? WHERE id = ?";
    db.query(
      query,
      [
        name,
        email,
        phone,
        register_date,
        looking_for,
        experience_level,
        job_role,
        address,
        id,
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        callback(null, result);
      }
    );
  },
  deleteSample: (id, callback) => {
    const query = "DELETE FROM user WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },
};

module.exports = Contact;
