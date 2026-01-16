const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUsersLike(name) {
  return await prisma.$queryRaw`SELECT * FROM User WHERE name LIKE ${'%' + name + '%'}`;
}

async function getAllUsers() {
  return await prisma.user.findMany();
}

module.exports = {
  getUsersLike,
  getAllUsers
};
