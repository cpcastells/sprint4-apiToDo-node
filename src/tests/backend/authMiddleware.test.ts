import * as dotenv from "dotenv";
import { type NextFunction, type Request, type Response } from "express";
import authMiddleware from "../../backend/middlewares/authMiddleware.js";

dotenv.config();

describe("Given a basicAuthMiddleware", () => {
  const next = jest.fn();

  describe("When it receives an authorization header with a valid user and password", () => {
    test("Then it should call the received next function", () => {
      const user = process.env.USER;
      const key = process.env.PASSWORD;
      const res = {};
      const req = {
        headers: {
          authorization: `Basic ${Buffer.from(`${user}:${key}`).toString(
            "base64"
          )}`,
        },
      };

      authMiddleware(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalled();
    });
  });

  describe("When it receives an authorization header with a non-valid user or password,", () => {
    const mockUser = "john";
    const mockPassword = "1234";
    const req = {
      headers: {
        authorization: `Basic ${Buffer.from(
          `${mockUser}:${mockPassword}`
        ).toString("base64")}`,
      },
    };
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    test("Then it should call the response status function with a 401", () => {
      const expectedStatus = 401;

      authMiddleware(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response send function with the message 'Unauthorized'", () => {
      const expectedMessage = "Unauthorized";

      authMiddleware(req as Request, res as Response, next as NextFunction);

      expect(res.send).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
