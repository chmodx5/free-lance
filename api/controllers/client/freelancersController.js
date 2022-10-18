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
        data: freelancer,
      });
    }
  };

  const searchFreelancer = async (req, res) => {
    // console.log(req.query, "query");
    let freelancers;
    if (
      !req.query.query ||
      req.query.query === undefined ||
      req.query.query === null ||
      req.query.query === ""
    ) {
      let totalfreelancers = await prisma.client.findMany({});
      let total_pages = totalfreelancers.length / 10;

      const pagesList = () => {
        let pages = [];
        for (let index = 0; index < total_pages; index++) {
          pages.push({
            page: index,
            link: "/freelancers/search?+page=" + index,
            skip: 10 * index,
          });
        }
        return pages;
      };

      freelancers = await prisma.client.findMany({
        skip: pagesList().filter((page) => page.page === req.query.page)[0]
          ? pagesList().filter((page) => page.page === req.query.page)[0].skip
          : 0,
        take: 10,
        orderBy: {
          first_name: "asc",
        },
      });

      res.status(200).json({
        status: true,
        message: "found " + freelancers.length + " " + "items",
        data: {
          firstPage: freelancers[0].id,
          lastPage: freelancers[9].id,
          totalPages: Math.ceil(totalfreelancers.length / 10),
          total: totalfreelancers.length,
          items: freelancers,
          pages: pagesList(),
        },
      });
    } else {
      let totalfreelancers = await prisma.client.findMany({
        where: {
          username: {
            contains: req.query.query,
          },
        },
      });
      let total_pages = totalfreelancers.length / 10;

      const pagesList = () => {
        let pages = [];
        for (let index = 0; index < total_pages; index++) {
          pages.push({
            page: index,
            link: "/freelancers/search?+page=" + index,
            skip: 10 * index,
          });
        }
        return pages;
      };

      freelancers = await prisma.client.findMany({
        skip: pagesList().filter((page) => page.page === req.query.page)[0]
          ? pagesList().filter((page) => page.page === req.query.page)[0].skip
          : 0,
        take: 10,
        orderBy: {
          first_name: "asc",
        },
        where: {
          username: {
            contains: req.query.query,
          },
        },
      });

      res.status(200).json(
        freelancers
          ? {
              status: true,
              message: "found " + freelancers.length + " " + "items",
              data: {
                firstPage: freelancers[0] ? freelancers[0].id : null,
                lastPage: freelancers[9] ? freelancers[9].id : null,
                totalPages: Math.ceil(totalfreelancers.length / 10),
                total: totalfreelancers.length,
                items: freelancers,
                pages: pagesList(),
              },
            }
          : {
              status: false,
              message: "not found",
            }
      );
    }
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
