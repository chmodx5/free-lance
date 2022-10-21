const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const moment = require("moment");
// objectives here
// we want to be able to create, update, delete and read a single project and all projects
const prisma = new PrismaClient();

async function main() {
  const createTask = async () => {};
  const singleTask = async () => {};
  const searchTask = async () => {};
  const updateTask = async () => {};
  const assignTask = async () => {};
  const deAssignTask = async () => {};
  const deleteTask = async () => {};
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
