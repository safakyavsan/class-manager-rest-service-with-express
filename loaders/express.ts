import { BaseLoader } from "./baseLoader";
import express, { Express } from "express";
import { Server } from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { Service } from "typedi";
import { apiConfig } from "../configs/apiServerConfig";
@Service()
export class ExpressLoader extends BaseLoader {
  express: Express;
  server: Server | null;
  config: typeof apiConfig;
  constructor(config: typeof apiConfig) {
    this.config = config;
    this.express = express();
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.server = null;
  }

  async start() {
    this.server = this.express
      .listen(this.config.port, () => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${this.config.port}`
        );
      })
      .on("error", (err: any) => {
        console.log(err);
      });
  }
  async stop() {
    this.server?.close();
  }
}
