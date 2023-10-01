import type Task from "../entities/Task.js";

export interface TaskRepository {
  create(task: Task): Promise<Task>;
  get(): Promise<Task[]>;
  delete(id: string): Promise<Task>;
  update(id: string, task: Task): Promise<Task>;
}
