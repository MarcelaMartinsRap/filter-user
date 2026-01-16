const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Ana', email: 'ana@email.com' },
      { name: 'Bruno', email: 'bruno@email.com' },
      { name: 'Carlos', email: 'carlos@email.com' },
      { name: 'Daniela', email: 'daniela@email.com' },
      { name: 'Eduarda', email: 'eduarda@email.com' },
      { name: 'Felipe', email: 'felipe@email.com' },
      { name: 'Gabriela', email: 'gabriela@email.com' },
      { name: 'Helena', email: 'helena@email.com' },
      { name: 'Igor', email: 'igor@email.com' },
      { name: 'Joana', email: 'joana@email.com' }
    ]
  });
  console.log('Seed realizado com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
