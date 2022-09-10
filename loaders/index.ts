import { Inject, Service } from "typedi";
import { ExpressLoader } from "./express";
import { MongoDbLoader } from "./mongoDb";
import RouterLoader from "./router";

@Service()
export class Loader {
  constructor(
    @Inject()
    private express: ExpressLoader,
    @Inject()
    private router: RouterLoader,
    @Inject()
    private mongoDb: MongoDbLoader
  ) {
    this.mongoDb = mongoDb;
    this.express = express;
    this.router = router;
  }

  async start() {
    await this.mongoDb.start();
    await this.router.start();
    await this.express.start();
  }
  async stop() {
    await this.express.stop();
    await this.mongoDb.stop();
  }
}
