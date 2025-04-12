const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const FormField = sequelize.define("FormField", {
  field_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Clients",
      key: "client_id",
    },
    allowNull: false,
  },
  step_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fields: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

module.exports = FormField;
