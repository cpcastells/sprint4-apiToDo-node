import { type NextFunction, type Request, type Response } from "express";

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = process.env.USER!;
  const key = process.env.PASSWORD!;
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const [type, credentials] = authHeader.split(" ");

    if (type === "Basic") {
      const [username, password] = Buffer.from(credentials, "base64")
        .toString("utf-8")
        .split(":");

      if (username === user && password === key) {
        next();

        return;
      }
    }
  }

  res.status(401).send("Unauthorized");
};

export default authMiddleware;
