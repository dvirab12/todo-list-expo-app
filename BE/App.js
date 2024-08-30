require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

const tasksRouter = require('./routers/tasks');
const usersRouter = require('./routers/users');

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_URI || "mongodb://localhost:27017/todoDB";

mongoose.connect(mongoDB)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});