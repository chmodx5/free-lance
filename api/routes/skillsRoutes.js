const express = require("express");
const router = express.Router();
const {
  createSkill,
  updateSkill,
  deleteSkill,
  getSkills,
} = require("./../controllers/skillsController");

router.post("/createskill", createSkill);
router.put("/updateskill", updateSkill);
router.delete("/deleteskill/:skill", deleteSkill);
// here on the get skills i can use route props or params to get them based on some certian filter e.g by get all skills belonging to a user or task
router.get("/getskills", getSkills);

module.exports = router;
