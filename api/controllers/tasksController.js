const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const moment = require("moment");
// objectives here
// we want to be able to create, update, delete and read a single project and all projects
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
          .then(() => {
            res.status(200).json({
              status: true,
              message: "Task created successfully",
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
  const getSingleTask = async (req, res) => {
    return res.send("wow");
  };
  const searchTask = async (req, res) => {
    let tasks = await prisma.client.findMany({
      select: {
        first_name: true,
        last_name: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });
    return res.status(200).json({
      status: true,
      message: "Tasks found",
      data: tasks,
    });
  };
  const updateTask = async (req, res) => {
    return res.send("wow");
  };
  const assignTask = async (req, res) => {
    return res.send("wow");
  };
  const deAssignTask = async (req, res) => {
    return res.send("wow");
  };
  const deleteTask = async (req, res) => {
    return res.send("wow");
  };

  module.exports = {
    createTask,
    getSingleTask,
    searchTask,
    updateTask,
    assignTask,
    deAssignTask,
    deleteTask,
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
