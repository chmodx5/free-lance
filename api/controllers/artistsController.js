const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const getArtists = async (req, res) => {
  const artists = await await prisma.artist.findMany({
    take: 10,
    cursor: {
      id: "cl81es2o30096j4tbnyo5zgfw",
    },
    include: {
      category: true,
    },
  });
  const categories = await await prisma.category.findMany({});

  res.json({ artists: artists, categories: categories });
};

const createArtist = (req, res) => {
  res.send("create Artist");
};

const getArtist = (req, res) => {
  res.send("get Artist");
};

const deleteArtist = (req, res) => {
  res.send("delete Artist");
};

const updateArtist = (req, res) => {
  res.send("update Artist");
};

module.exports = {
  getArtists,
  createArtist,
  getArtist,
  deleteArtist,
  updateArtist,
};
