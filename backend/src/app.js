const express = require("express");
const cors = require("cors");

const app = express();

// WAJIB DI ATAS ROUTES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require("./routes/auth.routes");
const courseRoutes = require("./routes/course.routes");
const topicRoutes = require("./routes/topic.routes");
const languageRoutes = require("./routes/language.routes");
const userRoutes = require("./routes/user.routes");

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/users", userRoutes);

module.exports = app;