import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const router: Router = express.Router();
const port: string | undefined = process.env.API_SERVER_PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
app.use(router);
router.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
