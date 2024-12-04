const express = require("express");
const bodyParser = require("body-parser");
const feedbackRoutes = require("./routes/feedbackRoutes");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

app.use("/api", feedbackRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
   