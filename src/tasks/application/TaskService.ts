import type Task from "../domain/entities/Task.js";
import { type TaskRepository } from "../domain/repositories/TaskRepository.js";

class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(task: Task): Promise<Task> {
    const createdTask = await this.taskRepository.create(task);

    return createdTask;
  }
}

export default TaskService;
