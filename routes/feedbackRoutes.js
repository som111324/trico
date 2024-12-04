const express = require("express");
const { getFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.post("/generate-feedback", getFeedback);

module.exports = router;
