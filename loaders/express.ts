import { BaseLoader } from "./baseLoader";
import express, { Express, Router } from "express";
import { Server } from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { Inject, Service } from "typedi";
import { apiConfig } from "../configs/apiServerConfig";
import { IndexRoute } from "../routes";
@Service()
export class ExpressLoader extends BaseLoader {
  _express: Express;
  _server: Server | null;
  _config: apiConfig;
  _router: Router;
  constructor(@Inject() config: apiConfig, @Inject() router: IndexRoute) {
    super();
    this._config = config;
    this._express = express();
    this._router = router.router;
    this._express.use(cors());
    this._express.use(bodyParser.json());
    this._express.use(this._router);
    this._server = null;
  }

  async start() {
    this._server = this._express
      .listen(this._config.port, () => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${this._config.port}`
        );
      })
      .on("error", (err: any) => {
        console.log(err);
      });
  }
  async stop() {
    this._server?.close();
  }
}
