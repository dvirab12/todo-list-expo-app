const express = require('express');
const router = express.Router();

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

router.post('/', (req, res) => {
    const {title, description} = req.body;

    if (!title) {
        return res.status(400).send("ERROR: Title is required!")
    }

    const newTask = {
        id: tasks.length + 1,
        title: title,
        description: description || ""
    }

    tasks.push(newTask);
    res.status(201).send("Added new task!");
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