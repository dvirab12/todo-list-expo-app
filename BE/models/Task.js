const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "", trim: true },
  completed: { type: Boolean, default: false},
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;