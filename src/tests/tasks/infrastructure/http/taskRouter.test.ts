import * as dotenv from "dotenv";
import type express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectToDatabase from "../../../../tasks/infrastructure/connectToDataBase.js";
import { Server } from "../../../../backend/Server.js";
import { TaskModel } from "../../../../tasks/infrastructure/models/taskSchema.js";
import {
  mockedTask,
  mockedTaskWithId,
  updatedMockedTask,
} from "../../../mocks/mocks.js";

dotenv.config();

let server: MongoMemoryServer;
let app: express.Express;

const user = process.env.USER;
const key = process.env.PASSWORD;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());

  const serverInstance = new Server("3000");
  app = serverInstance.app;
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

afterEach(async () => {
  await TaskModel.deleteMany();
});

describe("Given a POST /tasks endpoint", () => {
  describe("When it receives a request with an authorization header containing a valid user and password, and a task as a body", () => {
    test("Then it should return a 201 status and the new task", async () => {
      const expectedStatus = 201;
      const authString = Buffer.from(`${user}:${key}`).toString("base64");

      const response = await request(app)
        .post("/tasks")
        .set("Authorization", `Basic ${authString}`)
        .send(mockedTask)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("task");
    });
  });
});

describe("Given a GET /tasks endpoint", () => {
  beforeEach(async () => {
    await TaskModel.create(mockedTask);
  });

  describe("When it receives a request with an authorization header containing a valid user and password,", () => {
    test("Then it should return a 200 status and a collection of tasks", async () => {
      const expectedStatus = 200;
      const authString = Buffer.from(`${user}:${key}`).toString("base64");

      const response = await request(app)
        .get("/tasks")
        .set("Authorization", `Basic ${authString}`)
        .expect(expectedStatus);

      expect(response.body.tasks).toHaveLength(1);
    });
  });
});

describe("Given a DELETE /tasks/:id endpoint", () => {
  beforeEach(async () => {
    await TaskModel.create(mockedTaskWithId);
  });

  describe("When it receives a request with an authorization header containing a valid user and password and id as params,", () => {
    test("Then it should return a 200 status and a the deleted task", async () => {
      const expectedStatus = 200;
      const authString = Buffer.from(`${user}:${key}`).toString("base64");

      const response = await request(app)
        .delete(`/tasks/${mockedTaskWithId._id.toString()}`)
        .set("Authorization", `Basic ${authString}`)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("Object deleted");
    });
  });
});

describe("Given a PUT /tasks/:id endpoint", () => {
  beforeEach(async () => {
    await TaskModel.create(mockedTaskWithId);
  });

  describe("When it receives a request with an authorization header containing a valid user and password, id as params, and an updated task", () => {
    test("Then it should return a 200 status and the updated task", async () => {
      const expectedStatus = 200;
      const authString = Buffer.from(`${user}:${key}`).toString("base64");

      const response = await request(app)
        .put(`/tasks/${mockedTaskWithId._id.toString()}`)
        .set("Authorization", `Basic ${authString}`)
        .send(updatedMockedTask)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("Updated task");
    });
  });
});
