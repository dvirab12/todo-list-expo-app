const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log(tasks);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a task by ID
router.post('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask
        });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).send("ERROR: Title is required!");
    }

    const task = new Task({
        title: title,
        description: description || ""
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;