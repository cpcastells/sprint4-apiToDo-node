import { Router } from "express";
import createController from "./createController.js";
import getTasksController from "./getTasksController.js";
import deleteController from "./deleteController.js";

export const taskRouter = Router();

taskRouter.post("/", createController);

taskRouter.get("/", getTasksController);

taskRouter.delete("/:id", deleteController);
