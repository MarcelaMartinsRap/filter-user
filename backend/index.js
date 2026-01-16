const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('Backend rodando na porta 3000');
});
