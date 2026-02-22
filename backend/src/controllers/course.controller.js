const prisma = require("../config/prisma");

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
      where: { id: Number(req.params.id) },
      include: { topic: true, language: true }
    });

    if (!course) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const {
      topic_id,
      language_id,
      title,
      description,
      short_description,
      price,
      discount_rate,
      thumbnail_url,
      level
    } = req.body;

    const course = await prisma.courses.create({
      data: {
        topic_id: Number(topic_id),
        language_id: Number(language_id),
        title,
        description,
        short_description,
        price,
        discount_rate,
        thumbnail_url,
        level,
        created_by_id: req.user.id
      }
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
      where: { id: Number(req.params.id) },
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
      where: { id: Number(req.params.id) }
    });

    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};