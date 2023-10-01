import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const TaskModel = model("Task", taskSchema, "tasks");
