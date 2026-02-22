const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const courseRoutes = require("./routes/course.routes");

app.use("/api/courses", courseRoutes);

module.exports = app;