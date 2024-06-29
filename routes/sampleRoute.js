const express = require("express");
const router = express.Router();
const contactController = require("../controllers/sampleController");

router.post("/", contactController.create);
router.get("/", contactController.getAll);

module.exports = router;
