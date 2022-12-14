import express, { Application, Request, Response } from "express";
import router from "./Router/router";
const app: Application = express();
const port: number | string = process.env.port || 2020;

require("./config/Book_db");

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: `server up ✨`,
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`server working`);
});
