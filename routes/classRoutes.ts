import { Router } from "express";
import { Inject, Service } from "typedi";
import { IndexRoute } from ".";
import IndexController from "../controllers";

@Service()
export class ClassRoutes {
  app: Router;
  controller: IndexController;
  classRouter: Router;
  constructor(@Inject() indexRoute: IndexRoute) {
    this.app = indexRoute.router;
    this.controller = indexRoute.controller;
    this.classRouter = Router();
  }
  async start() {
    this.classRouter.get("/", this.controller.class);
    this.app.use("/class", this.classRouter);
  }
}
