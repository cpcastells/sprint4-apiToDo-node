import * as dotenv from "dotenv";
import type express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectToDatabase from "../../../../tasks/infrastructure/connectToDataBase.js";
import { Server } from "../../../../backend/Server.js";
import { TaskModel } from "../../../../tasks/infrastructure/models/taskSchema.js";
import { mockedTask } from "../../../mocks/mocks.js";

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
