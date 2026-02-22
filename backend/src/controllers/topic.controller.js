const prisma = require('../config/prisma');

// GET all topics
exports.getAllTopics = async (req, res) => {
  const topics = await prisma.topics.findMany();
  res.json(topics);
};

// GET by id
exports.getTopicById = async (req, res) => {
  const topic = await prisma.topics.findUnique({
    where: { id: Number(req.params.id) }
  });
  if (!topic) return res.status(404).json({ message: "Topic not found" });
  res.json(topic);
};

// CREATE
exports.createTopic = async (req, res) => {
  const { name, description, parent_id } = req.body;

  const topic = await prisma.topics.create({
    data: { name, description, parent_id }
  });

  res.status(201).json(topic);
};

// UPDATE
exports.updateTopic = async (req, res) => {
  const topic = await prisma.topics.update({
    where: { id: Number(req.params.id) },
    data: req.body
  });

  res.json(topic);
};

// DELETE
exports.deleteTopic = async (req, res) => {
  await prisma.topics.delete({
    where: { id: Number(req.params.id) }
  });

  res.json({ message: "Topic deleted" });
};