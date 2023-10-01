import cors from "cors";
import express from "express";
import helmet from "helmet";

export class Server {
  private readonly express: express.Express;

  constructor(private readonly port: string) {
    this.express = express();
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.json());
  }

  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.express.listen(this.port, () => {
        console.log(
          `✅ Backend App is running at http://localhost:${
            this.port
          } in ${this.express.get("env")} mode`
        );

        console.log("✋ Press CTRL-C to stop\n");

        resolve();
      });
    });
  }

  get app(): express.Express {
    return this.express;
  }
}
