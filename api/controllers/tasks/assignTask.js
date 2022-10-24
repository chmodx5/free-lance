const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const assignTask = async (req, res) => {
    return res.send("wow");
  };

  module.exports = assignTask;
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
