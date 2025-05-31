const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Criar Badges
  const badge1 = await prisma.badge.create({
    data: { 
      name: 'Leader'
     }
  });

  const badge2 = await prisma.badge.create({
    data: { 
      name: 'Mentor'
    }
  });

  // Criar Usuários
  const user1 = await prisma.user.create({
    data: { 
      name: 'Alice',
      Manager: false
    }
  });

  const user2 = await prisma.user.create({
    data: { 
      name: 'Bob',
      Manager: false
    }
  });

  const user3 = await prisma.user.create({
    data: { 
      name: 'Charlie',
      Manager: false 
    }
  });

  // Adicionar Feedbacks
  await prisma.feedback.createMany({
    data: [
      { Hard: 4, Soft: 8, comment: "test", userId: user1.id },
      { Hard: 4, Soft: 8, comment: "test", userId: user2.id }
    ]
  });

  // Adicionar Badges aos usuários
  await prisma.userBadge.create({
    data: { userId: user1.id, badgeId: badge1.id }
  });

  await prisma.userBadge.create({
    data: { userId: user2.id, badgeId: badge2.id }
  });

  // Definir um Manager
  await prisma.manager.create({
    data: { userId: user1.id }
  });

  // Criar Team gerenciado pelo Manager
  const team = await prisma.team.create({
    data: {
      name: 'Alpha Team',
      managerId: user1.id,
      users: {
        create: [
          { userId: user1.id },
          { userId: user2.id },
          { userId: user3.id }
        ]
      }
    }
  });

  console.log('Seed concluído com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
