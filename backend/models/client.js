const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Client = sequelize.define("Client", {
  client_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  client_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Completed", "Failed", "Started Hiring"),
    allowNull: false,
  },
  current_step: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Client;
