const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const getSingleTask = async (req, res) => {
    const taskId = req.params.taskId;

    const taskFromDB = await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });
    if (!taskFromDB) {
      res.status(200).json({
        success: false,
        message: "no task found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Task found",
        data: taskFromDB,
      });
    }
  };

  module.exports = getSingleTask;
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
