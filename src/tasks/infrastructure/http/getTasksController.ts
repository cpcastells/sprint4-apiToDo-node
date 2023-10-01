import { type Response, type Request } from "express";
import { taskService } from "../dependencies.js";

const getTasksController = async (_req: Request, res: Response) => {
  const tasks = await taskService.get();

  res.status(200).json({ tasks });
};

export default getTasksController;
