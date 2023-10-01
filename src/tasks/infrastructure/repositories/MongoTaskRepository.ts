import type Task from "../../domain/entities/Task.js";
import { type TaskRepository } from "../../domain/repositories/TaskRepository.js";
import { TaskModel } from "../models/taskSchema.js";

export class MongoTaskRepository implements TaskRepository {
  async create(task: Task): Promise<Task> {
    const createdTask = await TaskModel.create(task);

    return createdTask;
  }

  async get(): Promise<Task[]> {
    const tasks = await TaskModel.find();

    return tasks;
  }

  async delete(id: string): Promise<Task> {
    const _id = id;
    const task = await TaskModel.findOneAndDelete({ _id });
    if (!task) {
      throw new Error("Not task found");
    }

    return task;
  }
}
