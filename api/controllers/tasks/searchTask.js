const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const searchTask = async (req, res) => {
    let searchquery = req.query.searchquery;

    if (searchquery) {
      let searchResults = await prisma.tasks.findMany({
        where: {
          title: req.query.searchquery,
        },
        include: {
          skills: {},
        },
      });

      if (searchResults.length > 0) {
        return res.status(200).json({
          status: true,
          message: "Tasks found",
          data: searchResults,
        });
      } else {
        return res.status(200).json({
          status: false,
          message: "no tasks found",
        });
      }
    } else {
      return res.status(200).json({
        status: false,
        message: "please provide a search query",
      });
    }
  };

  module.exports = searchTask;
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
