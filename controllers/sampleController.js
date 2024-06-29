const Contact = require("../models/sampleModel");

const contactController = {
  create: async (req, res) => {
    const {
      name,
      email,
      phone,
      register_date,
      looking_for,
      experience_level,
      job_role,
      address,
    } = req.body;
    await Contact.createSample(
      name,
      email,
      phone,
      register_date,
      looking_for,
      experience_level,
      job_role,
      address,
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
          message: "Contact created successfully",
          contactId: result.insertId,
        });
      }
    );
  },
  getAll: async (req, res) => {
    await Contact.getSample((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  },
  getById: async (req, res) => {
    const { id } = req.params;
    await Contact.getById(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!result) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(result);
    });
  },
  updateSample: async (req, res) => {
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      register_date,
      looking_for,
      experience_level,
      job_role,
      address,
    } = req.body;
    await Contact.updateSample(
      id,
      name,
      email,
      phone,
      register_date,
      looking_for,
      experience_level,
      job_role,
      address,
      (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send(result);
      }
    );
  },
  deleteSample: async (req, res) => {
    const { id } = req.params;
    await Contact.deleteSample(id, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result);
    });
  },
};

module.exports = contactController;
