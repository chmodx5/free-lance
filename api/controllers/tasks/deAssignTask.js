const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const deAssignTask = async (req, res) => {
    return res.send("wow");
  };

  module.exports = deAssignTask;
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
