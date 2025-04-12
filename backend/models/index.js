const sequelize = require("../config/db");
const Client = require("./client");
const FormField = require("./formField");

Client.hasMany(FormField, { foreignKey: "client_id", as: "formFields" });
FormField.belongsTo(Client, { foreignKey: "client_id", as: "client" });

module.exports = {
  sequelize,
  Client,
  FormField,
};
