const express = require("express");
const router = express.Router();

const createTask = require("./../controllers/tasks/createTask");
const getSingleTask = require("./../controllers/tasks/getSingleTask");
const searchTask = require("./../controllers/tasks/searchTask");
const updateTask = require("./../controllers/tasks/updateTask");
const assignTask = require("./../controllers/tasks/assignTask");
const deAssignTask = require("./../controllers/tasks/deAssignTask");
const deleteTask = require("./../controllers/tasks/deleteTask");

router.post("/createtask", createTask);
router.get("/getsingletask/:taskId", getSingleTask);
router.get("/searchtask", searchTask);
router.put("/updatetask/:taskId", updateTask);
router.put("/assigntask", assignTask);
router.put("/deassigntask", deAssignTask);
router.delete("/deletetask/:taskId", deleteTask);

module.exports = router;
