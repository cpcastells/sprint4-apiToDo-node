import TaskService from "../application/TaskService.js";
import { MongoTaskRepository } from "./repositories/MongoTaskRepository.js";

const taskRepository = new MongoTaskRepository();
export const taskService = new TaskService(taskRepository);
