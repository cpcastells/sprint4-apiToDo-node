import type Task from "../entities/Task";

export interface TaskRepository {
  create(task: Task): Promise<Task>;
}
