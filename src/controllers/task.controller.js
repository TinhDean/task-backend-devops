const Task = require("../models/task.model");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
  });
  await task.save();
  res.status(201).json(task);
};

module.exports = {
  getTasks,
  createTask,
};
