import { Router } from "express";
import { Inject, Service } from "typedi";
import { IndexRoute } from ".";
import IndexController from "../controllers";

@Service()
export class StudentRoutes {
  app: Router;
  controller: IndexController;
  studentRouter: Router;
  constructor(@Inject() indexRoute: IndexRoute) {
    this.app = indexRoute.router;
    this.controller = indexRoute.controller;
    this.studentRouter = Router();
  }
  async start() {
    this.studentRouter.get("/", this.controller.student);
    this.app.use("/student", this.studentRouter);
  }
}
