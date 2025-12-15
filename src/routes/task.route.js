const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
} = require("../controllers/task.controller");

// GET /tasks
router.get("/", getTasks);

// POST /tasks
router.post("/", createTask);

module.exports = router;
