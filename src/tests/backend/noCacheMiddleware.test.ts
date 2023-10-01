import { type NextFunction, type Request, type Response } from "express";
import noCacheMiddleware from "../../backend/middlewares/noCacheMiddleware.js";

describe("Given a noCacheMiddleware", () => {
  describe("When it receives a request,", () => {
    test("Then it should set 'Cache-control' header and call next function", () => {
      const next = jest.fn();
      const req = {};
      const res: Partial<Response> = {
        set: jest.fn(),
      };

      noCacheMiddleware(req as Request, res as Response, next as NextFunction);

      expect(res.set).toHaveBeenCalledWith("Cache-Control", "no-cache");
      expect(next).toHaveBeenCalled();
    });
  });
});
