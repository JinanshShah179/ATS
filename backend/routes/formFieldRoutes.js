const express = require("express");
const {
  createFormField,
  getFormFields,
} = require("../controllers/formController");
const router = express.Router();

router.post("/", createFormField);
router.get("/", getFormFields);

module.exports = router;
