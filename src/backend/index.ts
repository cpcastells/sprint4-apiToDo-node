import connectToDatabase from "../tasks/infrastructure/connectToDataBase.js";
import { App } from "./App.js";

const mongodbConnection = process.env.MONGO_URI!;

try {
  void new App().start();
} catch (e) {
  process.exit(1);
}

try {
  await connectToDatabase(mongodbConnection);
  console.log("Connected to database");
} catch (error) {
  console.log(error.message);
}

process.on("uncaughtException", () => {
  process.exit(1);
});
