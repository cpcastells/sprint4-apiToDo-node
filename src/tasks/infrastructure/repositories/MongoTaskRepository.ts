import type Task from "../../domain/entities/Task.js";
import { type TaskRepository } from "../../domain/repositories/TaskRepository.js";
import { TaskModel } from "../models/taskSchema.js";

export class MongoTaskRepository implements TaskRepository {
  async create(task: Task): Promise<Task> {
    const createdTask = await TaskModel.create(task);

    return createdTask;
  }
}
