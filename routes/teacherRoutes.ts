import { Router } from "express";
import { Inject, Service } from "typedi";
import { IndexRoute } from ".";
import IndexController from "../controllers";

@Service()
export class TeacherRoutes {
  app: Router;
  controller: IndexController;
  teacherRouter: Router;
  constructor(@Inject() indexRoute: IndexRoute) {
    this.app = indexRoute.router;
    this.controller = indexRoute.controller;
    this.teacherRouter = Router();
  }
  async start() {
    this.teacherRouter.get("/", this.controller.teacher);
    this.app.use("/teacher", this.teacherRouter);
  }
}
