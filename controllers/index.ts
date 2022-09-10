import { Service } from "typedi";
import { Request, Response } from "express";
@Service()
export default class IndexController {
  userModel: any;
  constructor() {}
  public index(_req: Request, res: Response) {
    res.send("Hello World!");
  }
  public class(_req: Request, res: Response) {
    res.send("Hello Class!");
  }
  public student(_req: Request, res: Response) {
    res.send("Hello Student!");
  }
  public teacher(_req: Request, res: Response) {
    res.send("Hello Teacher!");
  }
}
