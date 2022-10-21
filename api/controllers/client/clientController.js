const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const moment = require("moment");
// here we want to manage all the operations involving a client that is CRUD operations and profile manangement
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
