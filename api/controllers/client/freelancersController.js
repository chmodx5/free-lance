const { PrismaClient, Prisma } = require("@prisma/client");
const { faker, GitModule } = require("@faker-js/faker");
const moment = require("moment");

const prisma = new PrismaClient();

async function main() {
  const getAllFreelancers = async (req, res) => {
    res.status(200).json({
      status: true,
      message: "all Freelancers",
    });
  };

  const getSingleFreelancerById = async (req, res) => {
    let freelancer = await prisma.client.findUnique({
      where: {
        username: req.params.username,
      },
    });
    if (freelancer == null || freelancer.length == 0) {
      res.status(200).json({
        status: false,
        message: "user not found",
        data: null,
      });
    } else {
      res.status(200).json({
        status: true,
        message: "user found",
        user: freelancer,
      });
    }
  };

  const searchFreelancer = async (req, res) => {
    console.log(req.params);

    const freelancers = await prisma.client.findMany({
      where: {
        username: req.params.searchTerm,
      },
    });

    res.status(200).json({
      status: true,
      message: "search freelancer",
      data: freelancers,
    });
  };

  module.exports = {
    getAllFreelancers,
    getSingleFreelancerById,
    searchFreelancer,
  };
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
