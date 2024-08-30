const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const jwt = require('jsonwebtoken');


//auth mmiddleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization']; 
    console.log('Authorization Header:', authHeader);

    const token =authHeader.split(' ')[1];
    console.log('token:', token);

    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }
        req.userId = decoded.id;
        next();
    });
};

// Get all tasks
router.get('/', authenticate, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.userId });
        console.log(tasks);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a task by ID
router.post('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, userId: req.userId }, req.body, { new: true });;

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
router.post('/', authenticate, async (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).send("ERROR: Title is required!");
    }

    const task = new Task({
        userId: req.userId,
        title: title,
        description: description || ""
    });

    try {
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

// Delete a task by ID
router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findOneAndDelete({ _id: id, userId: req.userId });

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;