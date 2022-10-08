const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 6; i++) {
    await prisma.category.create({
      data: {
        category: faker.name.firstName(),
      },
    });
  }

  const categoryId = await (
    await prisma.category.findMany({})
  ).map((item) => item.id);

  for (let i = 0; i < 100; i++) {
    await prisma.artist.create({
      data: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        artist_name:
          faker.science.chemicalElement().name +
          i +
          faker.system.commonFileExt(),
        location: faker.address.cityName() + "-" + faker.address.country(),
        thumbnail: faker.image.people(1234, 2345, true),
        profile_image: faker.image.people(1234, 2345, true),
        category_id: categoryId[Math.floor(Math.random() * categoryId.length)],
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
