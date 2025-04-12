const FormField = require("../models/formField");

exports.createFormField = async (req, res) => {
  try {
    const { client_id, step_id, fields } = req.body;
    const exists = await FormField.findOne({
      where: { client_id, step_id },
    });

    if (exists) {
      await exists.update({ fields });
      return res.status(200).json(exists);
    }

    const formField = await FormField.create({
      client_id,
      step_id,
      fields,
    });

    res.status(201).json(formField);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFormFields = async (req, res) => {
  try {
    const { client_id } = req.query;
    if (!client_id) {
      return res.status(400).json({ error: "client_id is required" });
    }
    const formFields = await FormField.findAll({
      where: { client_id },
    });

    if (formFields.length === 0) {
      return res.status(404).json({ message: "No Fields" });
    }
    res.status(200).json(formFields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
