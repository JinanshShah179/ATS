const express = require("express");
const sequelize = require("./config/db");
const clientRoutes = require("./routes/clientRoutes");
const formFieldRoutes = require("./routes/formFieldRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/clients", clientRoutes);
app.use("/form-fields", formFieldRoutes);

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
