import { type Response, type Request } from "express";
import { taskService } from "../dependencies.js";

const deleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await taskService.delete(id);

  res.status(200).json({ "Object deleted": task });
};

export default deleteController;
