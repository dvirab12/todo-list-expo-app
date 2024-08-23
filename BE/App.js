const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;  

const tasksRouter = require("./routers/tasks")

app.use(express.json());
app.use('/tasks', tasksRouter);

mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/todo_list";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const users = [{username: "admin", password: "admin"}]

const checkUserExists = (req, res, next) => {
    const {username} = req.body;
    const user = users.find(u => u.username === username); 

    if (user) {
            return res.status(401).send("This account is already in the system");
    }
    next();
} 

app.post('/login', checkUserExists, (req, res) => {
    res.status(200).send('Welcome to the protected route!');
});

app.post('/register', checkUserExists, (req, res) => {
    const {username, password} = req.body;

    users.push({username, password})
    return res.status(201).send("Added User!");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});