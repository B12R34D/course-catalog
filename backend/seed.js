const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  // UPSERT USER (tidak error kalau sudah ada)
  const user = await prisma.users.upsert({
    where: { email: "admin@mail.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@mail.com",
      password: "123456",
      role: "ADMIN",
    },
  });

  const topic = await prisma.topics.create({
    data: {
      name: "Web Development",
      description: "All about web dev",
    },
  });

  const language = await prisma.languages.create({
    data: {
      name: "English",
    },
  });

  await prisma.courses.create({
    data: {
      topic_id: topic.id,
      language_id: language.id,
      created_by_id: user.id,
      title: "Fullstack Web Development",
      description: "Learn React and Node",
      short_description: "React + Node + Prisma",
      price: 199.99,
      discount_rate: 10.0,
      thumbnail_url: "https://example.com/image.jpg",
      level: "BEGINNER",
    },
  });

  console.log("✅ Database seeded successfully");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());