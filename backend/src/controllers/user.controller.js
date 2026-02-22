const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

// GET all users
exports.getAllUsers = async (req, res) => {
  const users = await prisma.users.findMany({
    select: { id: true, name: true, email: true, role: true }
  });
  res.json(users);
};

// GET user by id
exports.getUserById = async (req, res) => {
  const user = await prisma.users.findUnique({
    where: { id: Number(req.params.id) },
    select: { id: true, name: true, email: true, role: true }
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// UPDATE user
exports.updateUser = async (req, res) => {
  const { name, email, role } = req.body;

  const user = await prisma.users.update({
    where: { id: Number(req.params.id) },
    data: { name, email, role }
  });

  res.json(user);
};

// DELETE user
exports.deleteUser = async (req, res) => {
  await prisma.users.delete({
    where: { id: Number(req.params.id) }
  });
  res.json({ message: "User deleted" });
};