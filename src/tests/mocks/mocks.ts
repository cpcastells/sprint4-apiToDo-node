import { Types } from "mongoose";
import type Task from "../../tasks/domain/entities/Task.js";

export const mockedTask: Task = {
  description: "Hello World",
  completed: false,
};

export const updatedMockedTask: Task = {
  description: "Hello World",
  completed: true,
};

export const mockedTaskWithId = {
  _id: new Types.ObjectId("6478dd2fe3e61710d8baa049"),
  description: "Hello World",
  completed: false,
};
