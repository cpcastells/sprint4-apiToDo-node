import { Router } from "express";
import createController from "./createController.js";

export const taskRouter = Router();

taskRouter.post("/", createController);
