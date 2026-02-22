const prisma = require('../config/prisma');

// GET all
exports.getAllLanguages = async (req, res) => {
  const languages = await prisma.languages.findMany();
  res.json(languages);
};

// GET by id
exports.getLanguageById = async (req, res) => {
  const language = await prisma.languages.findUnique({
    where: { id: Number(req.params.id) }
  });
  if (!language) return res.status(404).json({ message: "Language not found" });
  res.json(language);
};

// CREATE
exports.createLanguage = async (req, res) => {
  const language = await prisma.languages.create({
    data: req.body
  });

  res.status(201).json(language);
};

// UPDATE
exports.updateLanguage = async (req, res) => {
  const language = await prisma.languages.update({
    where: { id: Number(req.params.id) },
    data: req.body
  });

  res.json(language);
};

// DELETE
exports.deleteLanguage = async (req, res) => {
  await prisma.languages.delete({
    where: { id: Number(req.params.id) }
  });

  res.json({ message: "Language deleted" });
};