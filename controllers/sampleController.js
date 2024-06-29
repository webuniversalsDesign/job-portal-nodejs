const Contact = require("../models/sampleModel");

const contactController = {
  create: async (req, res) => {
    const { name, email, phone } = req.body;
    await Contact.createSample(name, email, phone, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        message: "Contact created successfully",
        contactId: result.insertId,
      });
    });
  },
  getAll: async (req, res) => {
    await Contact.getSample((err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  },
};

module.exports = contactController;
