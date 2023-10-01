import type Task from "../entities/Task.js";

export interface TaskRepository {
  create(task: Task): Promise<Task>;
  get(): Promise<Task[]>;
}
