import { Inject, Service } from "typedi";
import { ExpressLoader } from "./express";
import { config as Configs } from "../configs";
@Service()
class Loader {
  constructor(
    @Inject()
    private express: ExpressLoader,
    @Inject()
    private configs: typeof Configs
  ) {}

  async start() {
    await this.express.start();
  }
  async stop() {
    await this.express.stop();
  }
}
