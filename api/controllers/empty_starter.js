const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const moment = require("moment");

const prisma = new PrismaClient();

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
