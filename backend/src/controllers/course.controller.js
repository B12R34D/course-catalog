const prisma = require("../../prismaClient");

exports.getCourses = async (req, res) => {
  try {
    const courses = await prisma.courses.findMany({
      include: { topic: true, language: true }
    });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await prisma.courses.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { topic: true, language: true }
    });

    if (!course) return res.status(404).json({ message: "Not found" });

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await prisma.courses.create({
      data: req.body
    });

    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await prisma.courses.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await prisma.courses.delete({
      where: { id: parseInt(req.params.id) }
    });

    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};