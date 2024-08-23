const express = require('express');
const router = express.Router();

const Task = require('../models/Task')

tasks = []

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
})

router.post ('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        })

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

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(401).json({message: "Task not found"});
        }
        
        return res.status(200).json(deletedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;