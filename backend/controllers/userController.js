const userService = require('../services/userService');

async function getUsersLike(req, res) {
  const { name } = req.query;
  const start = Date.now();
  const users = await userService.getUsersLike(name);
  const duration = Date.now() - start;
  res.json({ duration, users });
}

async function getUsersBackend(req, res) {
  const { name } = req.query;
  const start = Date.now();
  const users = await userService.getAllUsers();
  const filtered = users.filter(u => u.name.includes(name));
  const duration = Date.now() - start;
  res.json({ duration, users: filtered });
}

module.exports = {
  getUsersLike,
  getUsersBackend
};
