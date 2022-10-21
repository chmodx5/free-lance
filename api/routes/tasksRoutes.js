const express = require("express");
const router = express.Router();
const {
  createTask,
  getSingleTask,
  searchTask,
  updateTask,
  assignTask,
  deAssignTask,
  deleteTask,
} = require("./../controllers/tasksController");

router.post("/createtask", createTask);
router.get("/getsingletask", getSingleTask);
router.get("/searchtask", searchTask);
router.put("/updatetask/:taskId", updateTask);
router.put("/assigntask", assignTask);
router.put("/deassigntask", deAssignTask);
router.delete("/deletetask/:taskId", deleteTask);

module.exports = router;
