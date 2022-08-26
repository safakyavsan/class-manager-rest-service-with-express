import { Inject, Service } from "typedi";
import { ClassRoutes } from "../routes/classRoutes";
import { StudentRoutes } from "../routes/studentRoutes";
import { TeacherRoutes } from "../routes/teacherRoutes";
import { BaseLoader } from "./baseLoader";

@Service()
export default class RouterLoader extends BaseLoader {
  classRouter: ClassRoutes;
  studentRoutes: StudentRoutes;
  teacherRoutes: TeacherRoutes;
  constructor(
    @Inject() classRoutes: ClassRoutes,
    @Inject() studentRoutes: StudentRoutes,
    @Inject() teacherRoutes: TeacherRoutes
  ) {
    super();
    this.classRouter = classRoutes;
    this.studentRoutes = studentRoutes;
    this.teacherRoutes = teacherRoutes;
  }

  async start() {
    await this.classRouter.start();
    await this.studentRoutes.start();
    await this.teacherRoutes.start();
  }
  async stop() {
    console.log("stopping router");
  }
}
