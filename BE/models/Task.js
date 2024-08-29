const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId , required: true, ref: 'User' },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "", trim: true },
  isCompleted: { type: Boolean, default: false},
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;