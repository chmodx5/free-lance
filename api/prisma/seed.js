const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  await prisma.tasks.deleteMany({});
  await prisma.skills.deleteMany({});
  // await prisma.tasks.deleteMany({});
  // const newTasks = [
  //   {
  //     title: "record a video while reading text",
  //     description:
  //       "for this project you are required to record a video while reading the following text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fringilla ipsum, nec hendrerit tellus. Duis ac iaculis ante. Maecenas egestas leo sem, at sollicitudin sem fringilla a. Vestibulum ante ipsum primis in faucibus  Mauris placerat orci nec vehicula fermentum. Curabitur placerat tristique metus, at gravida nibh dictum vitae. Aenean interdum, nibh eget scelerisque facilisis, arcu ligula gravida diam, ac congue dui libero vitae purus. Ut hendrerit, nisl nec convallis dignissim, tellus metus volutpat dolor, ac convallis ante ligula a nulla. Aliquam vel ligula vitae purus mattis semper nec vel metus. Nam suscipit dui eget lectus aliquam, quis consequat elit gravida. Suspendisse sit amet mauris ligula. Integer tincidunt arcu id felis laoreet, a fringilla lectus posuere. Proin mollis erat a vulputate efficitur.Sed sagittis, sapien at posuere bibendum, ligula orci ultrices lectus, at ultrices augue elit vitae eros. Donec dignissim sodales dolor eget imperdiet. Morbi luctus et diam sit amet congue. Duis vel imperdiet leo, feugiat congue elit. Suspendisse sollicitudin lorem sed elementum tristique. Donec ut diam turpis. Maecenas dui ipsum, tristique finibus ante sit amet, tempus sodales odio. Praesent mauris velit, pretium vitae lorem ut, sollicitudin tempor enim. Donec consequat, nulla id lobortis aliquet, odio eros viverra libero, eget tempor metus neque non nisl.",
  //     skills: [{ skill: "videography" }, { skill: "audio editing" }],
  //   },
  //   {
  //     title: "typing job ",
  //     description:
  //       " in this one you are required to type me the following text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fringilla ipsum, nec hendrerit tellus. Duis ac iaculis ante. Maecenas egestas leo sem, at sollicitudin sem fringilla a. Vestibulum ante ipsum primis in faucibus  Mauris placerat orci nec vehicula fermentum. Curabitur placerat tristique metus, at gravida nibh dictum vitae. Aenean interdum, nibh eget scelerisque facilisis, arcu ligula gravida diam, ac congue dui libero vitae purus. Ut hendrerit, nisl nec convallis dignissim, tellus metus volutpat dolor, ac convallis ante ligula a nulla. Aliquam vel ligula vitae purus mattis semper nec vel metus. Nam suscipit dui eget lectus aliquam, quis consequat elit gravida. Suspendisse sit amet mauris ligula. Integer tincidunt arcu id felis laoreet, a fringilla lectus posuere. Proin mollis erat a vulputate efficitur.Sed sagittis, sapien at posuere bibendum, ligula orci ultrices lectus, at ultrices augue elit vitae eros. Donec dignissim sodales dolor eget imperdiet. Morbi luctus et diam sit amet congue. Duis vel imperdiet leo, feugiat congue elit. Suspendisse sollicitudin lorem sed elementum tristique. Donec ut diam turpis. Maecenas dui ipsum, tristique finibus ante sit amet, tempus sodales odio. Praesent mauris velit, pretium vitae lorem ut, sollicitudin tempor enim. Donec consequat, nulla id lobortis aliquet, odio eros viverra libero, eget tempor metus neque non nisl.",
  //     skills: [
  //       { skill: "copywriting" },
  //       { skill: "editing" },
  //       { skill: "proofreding" },
  //     ],
  //   },
  // ];
  //   const newSkills = [
  //     "graphic desing",
  //     "web design",
  //     "web development",
  //     "mobile app development",
  //     "software development",
  //     "game development",
  //     "UI/UX design",
  //     "SEO",
  //     "design marketing",
  //     "content marketing",
  //     "social media marketing",
  //     "copywriting",
  //     "editing",
  //     "proofreading",
  //     "translation",
  //     "voiceover",
  //     "video editing",
  //     "3d modelling",
  //     "animation",
  //     "CAD",
  //     "Drawing",
  //     "Painting",
  //     "sketching",
  //     "photography",
  //     "videography",
  //     "audio editing",
  //     "music production",
  //     "sound design",
  //   ];

  //   await prisma.client.deleteMany({});

  //   for (let i = 0; i < 10; i++) {
  //     bcrypt.hash("password", 10, async function (err, hash) {
  //       await prisma.client.create({
  //         data: {
  //           first_name: faker.name.firstName().toLowerCase(),
  //           last_name: faker.name.lastName().toLowerCase(),
  //           username:
  //             faker.science.chemicalElement().name.toLocaleLowerCase() +
  //             i +
  //             faker.system.commonFileExt().toLocaleLowerCase(),
  //           email: faker.internet.email(),
  //           password: hash,
  //         },
  //       });
  //     });
  //   }

  //   await prisma.skills.deleteMany({});

  //   await prisma.skills.createMany({
  //     data: newSkills.map((item) => ({ skill: item })),
  //   });

  // let theuser = await prisma.client.findUnique({
  //   where: {
  //     username: "ruthenium2png",
  //   },
  // });
  // await prisma.tasks.create({
  //   data: {
  //     createdById: theuser.id,
  //     title: "record a video while reading text",
  //     description:
  //       "for this project you are required to record a video while reading the following text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fringilla ipsum, nec hendrerit tellus. Duis ac iaculis ante. Maecenas egestas leo sem, at sollicitudin sem fringilla a. Vestibulum ante ipsum primis in faucibus  Mauris placerat orci nec vehicula fermentum. Curabitur placerat tristique metus, at gravida nibh dictum vitae. Aenean interdum, nibh eget scelerisque facilisis, arcu ligula gravida diam, ac congue dui libero vitae purus. Ut hendrerit, nisl nec convallis dignissim, tellus metus volutpat dolor, ac convallis ante ligula a nulla. Aliquam vel ligula vitae purus mattis semper nec vel metus. Nam suscipit dui eget lectus aliquam, quis consequat elit gravida. Suspendisse sit amet mauris ligula. Integer tincidunt arcu id felis laoreet, a fringilla lectus posuere. Proin mollis erat a vulputate efficitur.Sed sagittis, sapien at posuere bibendum, ligula orci ultrices lectus, at ultrices augue elit vitae eros. Donec dignissim sodales dolor eget imperdiet. Morbi luctus et diam sit amet congue. Duis vel imperdiet leo, feugiat congue elit. Suspendisse sollicitudin lorem sed elementum tristique. Donec ut diam turpis. Maecenas dui ipsum, tristique finibus ante sit amet, tempus sodales odio. Praesent mauris velit, pretium vitae lorem ut, sollicitudin tempor enim. Donec consequat, nulla id lobortis aliquet, odio eros viverra libero, eget tempor metus neque non nisl.",
  //     skills: {
  //       connect: {
  //         skill: "editing",
  //       },
  //       connect: {
  //         skill: "copywriting",
  //       },
  //       connect: {
  //         skill: "proofreading",
  //       },
  //     },
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
