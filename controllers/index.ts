import { Service } from "typedi";

@Service()
class IndexController {
  public index(_req: any, res: any) {
    res.send("Hello World!");
  }
}
