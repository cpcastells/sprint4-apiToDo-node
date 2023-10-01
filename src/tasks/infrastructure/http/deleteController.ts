import { type Response, type Request } from "express";
import type Task from "../../domain/entities/Task.js";
import { taskService } from "../dependencies.js";

const deleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await taskService.delete(id);

  res.status(204).json({ "Object deleted": task });
};

export default deleteController;
