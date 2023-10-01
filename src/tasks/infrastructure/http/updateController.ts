import { type Response, type Request } from "express";
import type Task from "../../domain/entities/Task.js";
import { taskService } from "../dependencies.js";

const updateController = async (
  req: Request<Record<string, string>, Record<string, unknown>, Task>,
  res: Response
) => {
  const { id } = req.params;
  const task = req.body;
  const updatedTask = await taskService.update(id, task);

  res.status(200).json({ "Updated task": updatedTask });
};

export default updateController;
