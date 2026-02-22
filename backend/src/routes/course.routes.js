const express = require("express");
const router = express.Router();

const courseController = require("../controllers/course.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");

// PUBLIC
router.get("/", courseController.getCourses);
router.get("/:id", courseController.getCourseById);

// ADMIN ONLY
router.use(authMiddleware, adminMiddleware);

router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;