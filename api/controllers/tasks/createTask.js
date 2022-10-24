const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const createTask = async (req, res) => {
    const newTaskTitle = req.body.title;
    const newTaskDescription = req.body.description;
    const newTaskSkills = req.body.skills;

    const created_by_ID = "cl9i2w6nr0002bfusu5ihhb7x";

    if (newTaskTitle && newTaskDescription && newTaskSkills) {
      //this one checks if task is in db and the returns a true or false with message

      let errors = [];

      for (let index = 0; index < newTaskSkills.split(/[,]+/).length; index++) {
        let skillsFromDb = await prisma.skills.findMany({
          where: {
            skill: newTaskSkills.split(/[,]+/)[index].replace(" ", ""),
          },
        });
        if (skillsFromDb.length == 0) {
          errors.push(
            "skill - " + newTaskSkills.split(/[,]+/)[index] + " - is not in db"
          );
        }
      }

      let skillsConnector = newTaskSkills.split(/[,]+/);
      skillsConnector = skillsConnector.map((item) => item.replace(" ", ""));
      skillsConnector = skillsConnector.map((item) => ({
        skill: item,
      }));

      if (errors == 0) {
        await prisma.tasks
          .create({
            data: {
              title: newTaskTitle,
              description: newTaskDescription,
              skills: {
                connect: skillsConnector,
              },
              createdById: created_by_ID,
            },
          })
          .then((response) => {
            res.status(200).json({
              status: true,
              message: "Task created successfully",
              data: response,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.status(200).json({
          success: false,
          message: errors.join(", "),
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
  };

  module.exports = createTask;
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
