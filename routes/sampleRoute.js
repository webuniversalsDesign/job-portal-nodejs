const express = require("express");
const router = express.Router();
const contactController = require("../controllers/sampleController");

router.post("/", contactController.create);
router.get("/", contactController.getAll);
router.get("/:id", contactController.getById);
router.put("/:id", contactController.updateSample);
router.delete("/:id", contactController.deleteSample);

module.exports = router;
