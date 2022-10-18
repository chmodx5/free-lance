const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 3000; i++) {
    bcrypt.hash("password", 10, async function (err, hash) {
      await prisma.client.create({
        data: {
          first_name: faker.name.firstName().toLowerCase(),
          last_name: faker.name.lastName().toLowerCase(),
          username:
            faker.science.chemicalElement().name.toLocaleLowerCase() +
            i +
            faker.system.commonFileExt().toLocaleLowerCase(),
          email: faker.internet.email(),
          password: hash,
        },
      });
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
