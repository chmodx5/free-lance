const { PrismaClient } = require("@prisma/client");

//objextives here
//we want to get the all users and projects that belong to some skill

const prisma = new PrismaClient();

async function main() {
  const createSkill = async (req, res) => {
    const newSkill = req.body.skill;
    const searchSkillInDB = await prisma.skills.findMany({
      where: {
        skill: newSkill,
      },
    });

    if (searchSkillInDB.length > 0) {
      return res.status(200).json({
        status: false,
        message: "Skill already exists",
      });
    } else {
      await prisma.skills.create({
        data: {
          skill: newSkill,
        },
      });
    }

    return res.status(200).json({
      status: "success",
      message: newSkill + " " + "skill added successfully",
    });
  };
  const updateSkill = async (req, res) => {
    const skill = req.body.skill;
    const newSkill = req.body.newSkill;
    if (skill && newSkill) {
      //check if skill is in db
      const checkIfIncomingSkillIsInDB = await prisma.skills.findMany({
        where: {
          skill: skill,
        },
      });

      if (checkIfIncomingSkillIsInDB.length < 1) {
        return res.status(200).json({
          status: false,
          message: " the skill does not exist",
        });
      } else {
        await prisma.skills.update({
          where: {
            skill: skill,
          },
          data: {
            skill: newSkill,
          },
        });

        return res.status(200).json({
          status: "success",
          message: "skill successfully updated to- " + newSkill,
        });
      }
    }

    //update skill
  };
  const deleteSkill = async (req, res) => {
    const skillToDelete = req.params.skill;

    if (skillToDelete) {
      const searchForSkillInDB = await prisma.skills.findMany({
        where: {
          skill: skillToDelete,
        },
      });

      if (searchForSkillInDB.length > 0) {
        console.log(skillToDelete + 2);
        await prisma.skills.delete({
          where: {
            skill: skillToDelete,
          },
        });
        return res.status(200).json({
          status: true,
          message: "skill deleted successfully",
        });
      }
      return res.status(200).json({
        status: false,
        message: skillToDelete + " not found ",
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "please provide a skill to delete",
      });
    }
  };
  const getSkills = async (req, res) => {
    const all_skills = await prisma.skills.findMany({});
    return res.status(200).json({
      status: false,
      message: "success found " + all_skills.length + " items",
      data: all_skills,
    });
  };

  module.exports = {
    createSkill,
    updateSkill,
    deleteSkill,
    getSkills,
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
