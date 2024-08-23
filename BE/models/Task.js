const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "", trim: true },
  completed: { type: Boolean, default: false},
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;