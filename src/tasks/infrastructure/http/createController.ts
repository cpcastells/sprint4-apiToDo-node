import { type Response, type Request } from "express";
import type Task from "../../domain/entities/Task.js";
import { taskService } from "../dependencies.js";

const createController = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, Task>,
  res: Response
) => {
  const task = await taskService.create(req.body);

  res.status(201).json({ task });
};

export default createController;
