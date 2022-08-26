import { Inject, Service } from "typedi";
import { ExpressLoader } from "./express";
import RouterLoader from "./router";

@Service()
export class Loader {
  constructor(
    @Inject()
    private express: ExpressLoader,
    @Inject()
    private router: RouterLoader
  ) {
    this.express = express;
    this.router = router;
  }

  async start() {
    await this.router.start();
    await this.express.start();
  }
  async stop() {
    await this.express.stop();
  }
}
