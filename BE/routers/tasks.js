const express = require('express');
const router = express.Router();

const Task = require('../models/Task')

tasks = []

router.get('/', (req, res) => {
    res.json(tasks);
})

router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(tasks => tasks.id === taskId);

    if (task) {
        res.status(200).json(task);
    } else {
        res.status(401).json({message: "taskID not found!"});
    }
})

router.post('/', async (req, res) => {
    const {title, description} = req.body;

    if (!title) {
        return res.status(400).send("ERROR: Title is required!")
    }

    const task = new  Task({
        title: title,
        description: description || ""
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.delete('/:id', (req, res) => {
    const taskID = req.params.id;
    const task = tasks.find(tasks => tasks.id === taskId);

    if (task) {
        tasks.splice(taskID - 1, 1)
        res.status(200).json({message: `Deleted task ${taskID}`});
    } else {
        res.status(401).json({message: "taskID not found!"});
    }
})

module.exports = router;