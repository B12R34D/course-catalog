const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

router.get("/", courseController.getCourses);      // READ ALL
router.get("/:id", courseController.getCourseById); // READ ONE
router.post("/", courseController.createCourse);    // CREATE
router.put("/:id", courseController.updateCourse);  // UPDATE
router.delete("/:id", courseController.deleteCourse); // DELETE

module.exports = router;