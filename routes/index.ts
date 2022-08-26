import { Inject, Service } from "typedi";
import IndexController from "../controllers";
import { Router } from "express";
@Service()
export class IndexRoute {
  _router: Router;
  constructor(@Inject() private indexController: IndexController) {
    this.indexController = indexController;
    this._router = Router();
    this._router.get("/", this.indexController.index);
  }
  get router() {
    return this._router;
  }
  get controller() {
    return this.indexController;
  }
}
